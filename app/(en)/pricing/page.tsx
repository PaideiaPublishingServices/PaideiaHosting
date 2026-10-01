import { PricingPage } from "@/components/pages/pricing-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("pricing", "en", messages.pricing.meta)

export default function Page() {
  return <PricingPage locale="en" t={messages.pricing} common={messages.common} />
}
