import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'app/blog/_posts')

export interface PostMeta {
  title: string
  date: string
  description: string
  keywords: string[]
  slug: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    keywords: data.keywords ?? [],
    slug: data.slug ?? slug,
  }
}

export function getPost(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    keywords: data.keywords ?? [],
    slug: data.slug ?? slug,
    content,
  }
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}