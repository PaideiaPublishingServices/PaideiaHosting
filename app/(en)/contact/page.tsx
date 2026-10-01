import { ContactPage } from "@/components/pages/contact-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("contact", "en", messages.contact.meta)

export default function Page() {
  return <ContactPage locale="en" t={messages.contact} />
}
