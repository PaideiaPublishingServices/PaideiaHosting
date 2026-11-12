import Link from "next/link"
import { ArrowRight, BookOpen, Check, Download, ExternalLink, Github, LifeBuoy, MonitorPlay } from "lucide-react"

export const metadata = {
  title: "Paideia Theme for OJS 3.4 & 3.5 - Free Theme with Optional Support | Paideia Hosting",
  description:
    "Paideia Theme is a free GPL v3 theme for Open Journal Systems 3.4 and 3.5: article page for indexed journals, HTML full text, continuous publication, indexing block and SEO metadata. Optional annual support plan.",
}

const DOCS_URL = "https://paideiapublishingservices.github.io/paideiaTheme/en/"
const REPO_URL = "https://github.com/PaideiaPublishingServices/paideiaTheme"
const RELEASES_URL = `${REPO_URL}/releases/latest`
const DEMO_URL = "https://ojs35.paideiastudio.com.ar/index.php/demoestilos/"
const SUPPORT_URL = "https://shop.paideiahosting.net/shop/paideia-theme-annual-support-210"
const IMG = "https://paideiapublishingservices.github.io/paideiaTheme/img"

const features = [
  {
    title: "Article page for indexed journals",
    body: "Section, open access, license, authors with ORCID and affiliations, dates, copyable DOI, abstracts per language, side table of contents and metrics panel.",
  },
  {
    title: "HTML full text",
    body: "Read the article inside the page, with zoomable figures, scrollable tables and reference previews.",
  },
  {
    title: "How to cite",
    body: "CSL citation formats with a copy button, plus RIS and BibTeX download.",
  },
  {
    title: "Continuous publication",
    body: "Show the latest articles on the home page instead of the current issue.",
  },
  {
    title: "Indexing block",
    body: "15 indexes ready to enable by checkbox (Scopus, WoS, DOAJ, SciELO, Redalyc, Latindex…) and custom logos.",
  },
  {
    title: "SEO & discovery",
    body: "JSON-LD, Open Graph, canonical links and full-text URL for Google Scholar. Cited by (OpenAlex) and related articles.",
  },
  {
    title: "Fast and accessible",
    body: "Local fonts, no third-party scripts, keyboard navigation, dark mode, mobile and print layouts.",
  },
  {
    title: "Multilingual",
    body: "Interface in English, Spanish, Portuguese and Indonesian.",
  },
]

const screenshots = [
  { src: `${IMG}/article.jpg`, alt: "Article page" },
  { src: `${IMG}/home-indexing.jpg`, alt: "Home page with indexing block" },
  { src: `${IMG}/article-dark.jpg`, alt: "Article page in dark mode" },
]

const supportIncludes = [
  "Access to updated versions of the theme",
  "Bug fixing support",
  "Installation and usage guidance",
]

export default function PaideiaThemePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Free · GPL v3</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OJS 3.4 & 3.5</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Paideia Theme for OJS</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                A free theme for Open Journal Systems built for indexed journals: complete article page, HTML full text,
                continuous publication, indexing block and search-engine metadata. Installed like a plugin, configured
                from the OJS dashboard.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href={RELEASES_URL}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download free
                </a>
                <a
                  href={SUPPORT_URL}
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Get annual support
                </a>
              </div>
              <a href={DEMO_URL} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                <MonitorPlay className="mr-1 h-4 w-4" />
                See the live demo journal
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/home.jpg`}
              alt="Paideia Theme home page on a demo journal"
              width={1200}
              height={800}
              className="w-full rounded-lg border shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">What's included</h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {screenshots.map((s) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={s.src} src={s.src} alt={s.alt} loading="lazy" className="w-full rounded-lg border shadow-sm" />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
            Screenshots show a fictional demo journal.
          </p>
        </div>
      </section>

      {/* Downloads & requirements */}
      <section id="download" className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Downloads</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={RELEASES_URL} className="inline-flex items-center font-medium text-primary hover:underline">
                    <Download className="mr-2 h-4 w-4" />
                    Latest release (paideia-x.y.z.w.tar.gz)
                  </a>
                </li>
                <li>
                  <a href={REPO_URL} className="inline-flex items-center font-medium text-primary hover:underline">
                    <Github className="mr-2 h-4 w-4" />
                    Source code on GitHub
                  </a>
                </li>
                <li>
                  <a href={DOCS_URL} className="inline-flex items-center font-medium text-primary hover:underline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Full documentation
                  </a>
                </li>
              </ul>
              <h3 className="mb-2 mt-6 font-semibold">Requirements</h3>
              <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <li>OJS 3.4 or 3.5 (not compatible with OJS 3.3)</li>
                <li>PHP 8.0 or later (8.2 for OJS 3.5)</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Install in 3 steps</h2>
              <ol className="list-decimal space-y-3 pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Download the .tar.gz package from the releases page. Do not unpack it.</li>
                <li>
                  In OJS, go to <strong>Settings → Website → Plugins</strong> and use <strong>Upload a new plugin</strong>.
                </li>
                <li>
                  Go to <strong>Settings → Website → Appearance → Theme</strong>, choose <strong>Paideia</strong> and save.
                </li>
              </ol>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                To update, upload the new package the same way: OJS detects the newer version and keeps your settings.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-gray-500 dark:text-gray-400">
            Released under GPL v3. The license requires keeping the &ldquo;Theme developed by Paideia Studio&rdquo; credit
            visible in the footer.
          </p>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="w-full py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The theme is free. Support is optional.</h2>
            <p className="md:text-lg opacity-90">
              Get the annual support plan if you want help keeping your journal running smoothly with Paideia Theme.
            </p>
            <ul className="space-y-2 text-left">
              {supportIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href={SUPPORT_URL}
                className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100"
              >
                Buy annual support
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/services/ojs-hosting"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
              >
                Managed OJS hosting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
