import { PricingPage } from "@/components/pages/pricing-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("pricing", "es", messages.pricing.meta)

export default function Page() {
  return <PricingPage locale="es" t={messages.pricing} common={messages.common} />
}
