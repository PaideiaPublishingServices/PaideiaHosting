import { AtomHostingPage } from "@/components/pages/atom-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("atomHosting", "en", messages.atomHosting.meta)

export default function Page() {
  return <AtomHostingPage locale="en" t={messages.atomHosting} common={messages.common} />
}
