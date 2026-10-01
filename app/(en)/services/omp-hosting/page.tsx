import { OMPHostingPage } from "@/components/pages/omp-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("ompHosting", "en", messages.ompHosting.meta)

export default function Page() {
  return <OMPHostingPage locale="en" t={messages.ompHosting} common={messages.common} />
}
