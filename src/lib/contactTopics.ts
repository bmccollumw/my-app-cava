// Contact form topics — shared by the contact page and the API route.
// `color` / `ink` = the practice page's brand color and the text color on it.
export const CONTACT_TOPICS = [
  { id: 'partnerships', label: 'Partnerships', color: '#702B36', ink: '#ffffff' },
  { id: 'airport', label: 'Airport advertising', color: '#456672', ink: '#ffffff' },
  { id: 'public-sector', label: 'Public sector', color: '#2C3A40', ink: '#ffffff' },
  { id: 'strategic-communications', label: 'Strategic communications', color: '#D7E1D9', ink: '#2C3A40' },
  { id: 'diversity-outreach', label: 'Diversity outreach', color: '#F1CF9D', ink: '#2C3A40' },
  { id: 'web-development', label: 'Web development', color: '#7198A3', ink: '#111111' },
  { id: 'general', label: 'General inquiry', color: '#984E4A', ink: '#ffffff' },
] as const

export type ContactTopic = (typeof CONTACT_TOPICS)[number]
export type ContactTopicId = ContactTopic['id']

export const DEFAULT_TOPIC: ContactTopicId = 'general'

export function topicById(id: string): ContactTopic | undefined {
  return CONTACT_TOPICS.find((t) => t.id === id)
}