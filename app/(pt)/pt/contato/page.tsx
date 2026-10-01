import { ContactPage } from "@/components/pages/contact-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("contact", "pt", messages.contact.meta)

export default function Page() {
  return <ContactPage locale="pt" t={messages.contact} />
}
