import { BlogPage } from "@/components/pages/blog-page"
import { getAllPosts } from "@/lib/posts"
import { getMessages } from "@/lib/i18n/messages"
import { localizedMetadata } from "@/lib/i18n/metadata"

const messages = getMessages("pt")

export const metadata = localizedMetadata("blog", "pt", messages.blog.meta)

export default function Page() {
  return <BlogPage locale="pt" t={messages.blog} posts={getAllPosts()} />
}
