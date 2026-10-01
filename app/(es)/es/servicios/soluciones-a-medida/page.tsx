import { CustomSolutionsPage } from "@/components/pages/custom-solutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("customSolutions", "es", messages.customSolutions.meta)

export default function Page() {
  return <CustomSolutionsPage locale="es" t={messages.customSolutions} />
}
