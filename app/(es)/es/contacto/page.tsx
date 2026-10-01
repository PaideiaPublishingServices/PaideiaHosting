import { ContactPage } from "@/components/pages/contact-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("contact", "es", messages.contact.meta)

export default function Page() {
  return <ContactPage locale="es" t={messages.contact} />
}
