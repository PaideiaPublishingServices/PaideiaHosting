import { OJSHostingPage } from "@/components/pages/ojs-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("ojsHosting", "en", messages.ojsHosting.meta)

export default function Page() {
  return <OJSHostingPage locale="en" t={messages.ojsHosting} common={messages.common} />
}
