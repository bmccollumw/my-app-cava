import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { topicById } from '@/lib/contactTopics'
import { saveSubmission } from '@/lib/contactDb'

// The email client is created when a message is sent (not when the site builds),
// so `npm run build` works even without RESEND_API_KEY on your computer.
let resend: Resend | null = null
function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  resend ??= new Resend(process.env.RESEND_API_KEY)
  return resend
}

// ✉️ Where submissions are emailed.
//    Set CONTACT_TO_EMAIL in Vercel to change it without editing code
//    (e.g. to the client's inbox). Falls back to the address below.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'bmccollumw@gmail.com'

// 📤 A verified sender on your Resend domain.
//    Until you verify a domain, onboarding@resend.dev only sends to your own account email.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>'

// Limits
const MAX = { name: 120, company: 160, email: 254, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Escape anything a visitor typed before it goes into the email's HTML,
// so nobody can inject links, images or markup into your inbox.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))

    // Honeypot: real people never see or fill the "website" field.
    // Bots usually do — pretend it worked and drop it.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true })
    }

    const topic = topicById(clean(body.topic, 60))
    const name = clean(body.name, MAX.name)
    const company = clean(body.company, MAX.company)
    const email = clean(body.email, MAX.email)
    const message = clean(body.message, MAX.message)

    if (!topic || !name || !email || !message) {
      return NextResponse.json({ error: 'Please fill in every required field.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // 1) Save to the database (if one is configured). If it fails, still send the email.
    let saved = false
    try {
      saved = await saveSubmission({
        topic: topic.label,
        name,
        company: company || null,
        email,
        message,
      })
    } catch (err) {
      console.error('[Contact DB error]', err)
    }

    // 2) Email the submission — every visitor value is escaped
    const row = (label: string, value: string, preWrap = false) => `
      <tr>
        <td style="padding: 10px 0; font-weight: bold; width: 110px; vertical-align: top; color: #555;">${label}</td>
        <td style="padding: 10px 0;${preWrap ? ' white-space: pre-wrap;' : ''}">${escapeHtml(value)}</td>
      </tr>`

    const mailer = getResend()
    if (!mailer) {
      console.error('[Contact] RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Something went wrong sending your message. Please try again later.' },
        { status: 500 }
      )
    }

    const { error } = await mailer.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission — ${topic.label}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="border-bottom: 4px solid ${topic.color}; padding-bottom: 12px;">New contact submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${row('Topic', topic.label)}
            ${row('Name', name)}
            ${company ? row('Company', company) : ''}
            ${row('Email', email)}
            ${row('Message', message, true)}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from the website contact form${saved ? ' · saved to the database' : ''}.
            Reply directly to this email to respond.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('[Resend error]', error)
      // If it was saved, the lead isn't lost — still tell the visitor it worked.
      if (saved) return NextResponse.json({ success: true })
      return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact route error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}