import { VPSForInstitutionsPage } from "@/components/pages/vps-for-institutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("vpsForInstitutions", "pt", messages.vpsForInstitutions.meta)

export default function Page() {
  return <VPSForInstitutionsPage locale="pt" t={messages.vpsForInstitutions} common={messages.common} />
}
