import { HomePage } from "@/components/pages/home-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("home", "pt", messages.home.meta)

export default function Page() {
  return <HomePage locale="pt" t={messages.home} />
}
