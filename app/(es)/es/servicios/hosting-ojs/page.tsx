import { OJSHostingPage } from "@/components/pages/ojs-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("ojsHosting", "es", messages.ojsHosting.meta)

export default function Page() {
  return <OJSHostingPage locale="es" t={messages.ojsHosting} common={messages.common} />
}
