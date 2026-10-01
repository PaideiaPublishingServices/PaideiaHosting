import { HomePage } from "@/components/pages/home-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("home", "en", messages.home.meta)

export default function Page() {
  return <HomePage locale="en" t={messages.home} />
}
