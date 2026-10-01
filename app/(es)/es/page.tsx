import { HomePage } from "@/components/pages/home-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("home", "es", messages.home.meta)

export default function Page() {
  return <HomePage locale="es" t={messages.home} />
}
