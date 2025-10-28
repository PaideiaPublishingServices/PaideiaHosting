import Link from "next/link"
import Image from "next/image"
import { BookOpen, Server, Database, Code, Users, Award, Globe, BookMarked } from "lucide-react"

export const metadata = {
  title: "About Us - Paideia Hosting",
  description:
    "Learn about Paideia Hosting, our mission, values, and how we're part of the larger Paideia Publishing Services ecosystem.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Paideia Hosting
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Specialized hosting solutions for academic institutions, part of the Paideia Publishing Services
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="Paideia Hosting Team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                How we became leaders in academic hosting solutions
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Paideia Hosting was founded with a clear mission: to provide specialized hosting solutions for academic
                institutions and scholarly publishing. Born from the needs we observed while working with universities,
                research centers, and academic publishers, we recognized that standard hosting solutions weren't meeting
                the unique requirements of scholarly communication platforms.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                As part of the larger Paideia Publishing Services ecosystem, we leverage our deep understanding of
                academic workflows and publishing processes to create hosting environments that are optimized for
                platforms like Open Journal Systems (OJS), Open Monograph Press (OMP), Dataverse, and Access to Memory
                (AtoM).
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Our team combines expertise in both information technology and scholarly publishing, allowing us to
                bridge the gap between technical requirements and academic needs. This unique perspective has enabled us
                to grow from a small hosting provider to a trusted partner for academic institutions across Latin
                America and beyond.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="Paideia Hosting History"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The principles that guide our work
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <Award className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Academic Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We're committed to supporting the highest standards of academic publishing and research data management
                through reliable, secure hosting solutions.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in making advanced hosting solutions accessible to academic institutions of all sizes, from
                small journals to large research universities.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <Globe className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Open Knowledge</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support the open access movement and open source academic software by providing optimized hosting
                environments for these platforms.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <Server className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Technical Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We maintain the highest standards of technical performance, security, and reliability in all our hosting
                solutions.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <BookMarked className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Academic Focus</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We specialize exclusively in academic and research hosting, allowing us to develop deep expertise in the
                unique needs of this sector.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <Code className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We continuously explore new technologies and approaches to improve our hosting solutions for the
                evolving needs of academic institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Paideia Ecosystem Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">The Paideia Ecosystem</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Paideia Hosting is part of a comprehensive suite of services for academic publishing
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Paideia Publishing Services</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our parent organization that provides comprehensive editorial services for academic institutions,
                including journal management, editorial workflow optimization, and publishing consultancy.
              </p>
              <Link
                href="https://paideiaeditorial.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                Visit Paideia Publishing Services
              </Link>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Code className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Paideia Studio</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our creative and development arm that specializes in website design, custom development, and digital
                solutions for academic publishers and institutions.
              </p>
              <Link
                href="https://paideiastudio.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                Visit Paideia Studio
              </Link>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <BookMarked className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Paideia Editorial</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our editorial division that provides copyediting, proofreading, layout, and design services for academic
                publications, ensuring the highest quality of published content.
              </p>
              <Link
                href="https://paideiaeditorial.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                Visit Paideia Editorial
              </Link>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">LATarxiv Preprints</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our preprint server for Latin American research, providing a platform for researchers to share their
                work before formal peer review and publication.
              </p>
              <Link
                href="https://preprints.latarxiv.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                Visit LATarxiv Preprints
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Meet the experts behind Paideia Hosting
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. María Rodríguez</h3>
              <p className="text-primary">Founder & CEO</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Former academic publisher with 15+ years of experience in scholarly communication and digital
                publishing.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Carlos Mendoza</h3>
              <p className="text-primary">CTO</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Systems engineer with extensive experience in academic software platforms and cloud infrastructure.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Alejandro Morales</h3>
              <p className="text-primary">Academic Director</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Former university professor and journal editor with deep knowledge of academic publishing workflows.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Laura Sánchez</h3>
              <p className="text-primary">Client Success Manager</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Specialist in academic publishing with experience in training and supporting editorial teams.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Miguel Torres</h3>
              <p className="text-primary">Lead Systems Administrator</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Expert in OJS, OMP, and Dataverse configuration, optimization, and maintenance.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ana Gómez</h3>
              <p className="text-primary">Technical Support Lead</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Specialized in providing technical support for academic publishing platforms and repositories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Clients & Partners</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Trusted by leading academic institutions across Latin America and beyond
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Client/Partner Logos - Replace with actual logos */}
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop"
                width={160}
                height={80}
                alt="Client Logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing community of academic institutions using Paideia Hosting
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

