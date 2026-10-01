import { ServicesPage } from "@/components/pages/services-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("services", "en", messages.services.meta)

export default function Page() {
  return <ServicesPage locale="en" t={messages.services} />
}
