import { RepositoryHostingPage } from "@/components/pages/repository-hosting-page"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("repositoryHosting", "es", messages.repositoryHosting.meta)

export default function Page() {
  return <RepositoryHostingPage locale="es" t={messages.repositoryHosting} common={messages.common} />
}
