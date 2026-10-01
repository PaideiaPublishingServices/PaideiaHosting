import { AboutPage } from "@/components/pages/about-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("about", "en", messages.about.meta)

export default function Page() {
  return <AboutPage locale="en" t={messages.about} />
}
