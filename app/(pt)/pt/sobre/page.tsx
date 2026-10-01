import { AboutPage } from "@/components/pages/about-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("about", "pt", messages.about.meta)

export default function Page() {
  return <AboutPage locale="pt" t={messages.about} />
}
