import { BackupSolutionsPage } from "@/components/pages/backup-solutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("backupSolutions", "es", messages.backupSolutions.meta)

export default function Page() {
  return <BackupSolutionsPage locale="es" t={messages.backupSolutions} currency={messages.common.pricing.currency} />
}
