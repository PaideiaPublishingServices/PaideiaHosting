import { BackupSolutionsPage } from "@/components/pages/backup-solutions-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("backupSolutions", "en", messages.backupSolutions.meta)

export default function Page() {
  return <BackupSolutionsPage locale="en" t={messages.backupSolutions} currency={messages.common.pricing.currency} />
}
