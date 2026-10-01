import { PricingPage } from "@/components/pages/pricing-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("pricing", "pt", messages.pricing.meta)

export default function Page() {
  return <PricingPage locale="pt" t={messages.pricing} common={messages.common} />
}
