import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata = {
  title: 'Blog - Paideia Hosting',
  description:
    'Artículos y recursos sobre hosting académico, OJS, repositorios institucionales y publicación científica en acceso abierto.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Blog
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Recursos, guías y novedades sobre hosting académico, OJS, repositorios
                institucionales y publicación en acceso abierto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No hay artículos publicados aún.</p>
          ) : (
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-primary">
                    Leer más →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¿Necesitás hosting académico?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed">
                Consultanos sin compromiso. Tenemos planes para OJS, OMP, repositorios y más.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}