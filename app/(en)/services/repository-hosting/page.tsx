import { RepositoryHostingPage } from "@/components/pages/repository-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("en")

export const metadata = localizedMetadata("repositoryHosting", "en", messages.repositoryHosting.meta)

export default function Page() {
  return <RepositoryHostingPage locale="en" t={messages.repositoryHosting} common={messages.common} />
}
