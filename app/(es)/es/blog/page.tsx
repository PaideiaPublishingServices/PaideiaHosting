import { BlogPage } from "@/components/pages/blog-page"
import { getAllPosts } from "@/lib/posts"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("es")

export const metadata = localizedMetadata("blog", "es", messages.blog.meta)

export default function Page() {
  return <BlogPage locale="es" t={messages.blog} posts={getAllPosts()} />
}
