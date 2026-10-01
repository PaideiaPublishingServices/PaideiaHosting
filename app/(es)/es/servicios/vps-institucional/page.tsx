import { VPSForInstitutionsPage } from "@/components/pages/vps-for-institutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("vpsForInstitutions", "es", messages.vpsForInstitutions.meta)

export default function Page() {
  return <VPSForInstitutionsPage locale="es" t={messages.vpsForInstitutions} common={messages.common} />
}
