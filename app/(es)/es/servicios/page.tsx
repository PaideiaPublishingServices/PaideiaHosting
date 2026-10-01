import { ServicesPage } from "@/components/pages/services-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("services", "es", messages.services.meta)

export default function Page() {
  return <ServicesPage locale="es" t={messages.services} />
}
