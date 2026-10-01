import { AtomHostingPage } from "@/components/pages/atom-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("atomHosting", "pt", messages.atomHosting.meta)

export default function Page() {
  return <AtomHostingPage locale="pt" t={messages.atomHosting} common={messages.common} />
}
