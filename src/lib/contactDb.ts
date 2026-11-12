import postgres from 'postgres'

/**
 * Saves contact form submissions to Postgres.
 *
 * Works with any Postgres host (Neon / Vercel Postgres, Supabase, etc.).
 * Set DATABASE_URL in .env.local and in Vercel → Settings → Environment
 * Variables. If DATABASE_URL is not set, saving is skipped and the form
 * still sends the email.
 */

export type ContactSubmission = {
  topic: string
  name: string
  company: string | null
  email: string
  message: string
}

let sql: ReturnType<typeof postgres> | null = null
let tableReady: Promise<unknown> | null = null

function db() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  if (!sql) {
    sql = postgres(url, { ssl: 'require', max: 1, idle_timeout: 20 })
  }
  return sql
}

// Creates the table the first time it's needed (safe to run repeatedly).
function ensureTable(s: NonNullable<ReturnType<typeof db>>) {
  if (!tableReady) {
    tableReady = s`
      create table if not exists contact_submissions (
        id          bigserial primary key,
        created_at  timestamptz not null default now(),
        topic       text not null,
        name        text not null,
        company     text,
        email       text not null,
        message     text not null
      )
    `.catch((err) => {
      tableReady = null // try again next time
      throw err
    })
  }
  return tableReady
}

/** Returns true if saved, false if no database is configured. Throws on DB errors. */
export async function saveSubmission(sub: ContactSubmission): Promise<boolean> {
  const s = db()
  if (!s) return false

  await ensureTable(s)
  await s`
    insert into contact_submissions (topic, name, company, email, message)
    values (${sub.topic}, ${sub.name}, ${sub.company}, ${sub.email}, ${sub.message})
  `
  return true
}