import { OJSHostingPage } from "@/components/pages/ojs-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("ojsHosting", "pt", messages.ojsHosting.meta)

export default function Page() {
  return <OJSHostingPage locale="pt" t={messages.ojsHosting} common={messages.common} />
}
