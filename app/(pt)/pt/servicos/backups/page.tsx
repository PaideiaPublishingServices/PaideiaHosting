import { BackupSolutionsPage } from "@/components/pages/backup-solutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("backupSolutions", "pt", messages.backupSolutions.meta)

export default function Page() {
  return <BackupSolutionsPage locale="pt" t={messages.backupSolutions} />
}
