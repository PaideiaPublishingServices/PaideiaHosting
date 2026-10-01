import { AboutPage } from "@/components/pages/about-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("about", "es", messages.about.meta)

export default function Page() {
  return <AboutPage locale="es" t={messages.about} />
}
