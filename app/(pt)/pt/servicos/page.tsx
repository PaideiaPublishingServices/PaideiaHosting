import { ServicesPage } from "@/components/pages/services-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("services", "pt", messages.services.meta)

export default function Page() {
  return <ServicesPage locale="pt" t={messages.services} />
}
