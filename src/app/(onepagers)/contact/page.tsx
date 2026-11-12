import ContactPageClient from '@/components/ContactPageClient'
import { DEFAULT_TOPIC, topicById } from '@/lib/contactTopics'

/**
 * /contact — reads ?topic= from the link the visitor clicked
 * (e.g. /contact?topic=airport) and pre-selects that topic.
 * Unknown or missing topics fall back to "General inquiry".
 */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>
}) {
  const { topic } = await searchParams
  const requested = Array.isArray(topic) ? topic[0] : topic
  const initialTopic = topicById(requested ?? '')?.id ?? DEFAULT_TOPIC

  return <ContactPageClient key={initialTopic} initialTopic={initialTopic} />
}