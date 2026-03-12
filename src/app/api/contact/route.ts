import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// ✉️ Change this to your destination email
const TO_EMAIL = 'bmccollumw@gmail.com'

// 📤 Change this to a verified sender on your Resend domain
// Until you verify a domain, you can use: onboarding@resend.dev (only sends to your own account email)
const FROM_EMAIL = 'Contact Form <onboarding@resend.dev>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { topic, email, message } = body

    if (!topic || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission — ${topic}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 12px;">New Contact Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 100px; color: #555;">Topic</td>
              <td style="padding: 10px 0;">${topic}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">From</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top; color: #555;">Message</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from your website contact form. Reply directly to this email to respond to ${email}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('[Resend error]', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact route error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}