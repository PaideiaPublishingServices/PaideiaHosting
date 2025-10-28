import Link from "next/link"
import { Youtube, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Paideia Hosting</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cloud for Science, Solutions for Knowledge</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/paideiastudio" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.youtube.com/channel/UC5N-U5k1_2o3r8f_jwJdM3g" className="text-gray-500 hover:text-primary">
                 <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.linkedin.com/company/paideia-studio" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/PaideiaPublishingServices" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ojs-hosting"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  OJS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/omp-hosting"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  OMP Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/repository-hosting"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  Repository Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/atom-hosting"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  AtoM Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vps-for-institutions"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  VPS for Institutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">Argentina Office:</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Italia 147, Córdoba, 6132, Argentina</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">US Office:</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2810 North Church Street, Wilmington, DE 19802, US</span>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">+39 (351) 757-6248</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">contact@paideiahosting.net</span>
                </li>
              </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Paideia Hosting. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://paideiastudio.net/terminos-y-condiciones/" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              Terms of Service
            </Link>
            <Link href="https://paideiastudio.net/privacidad/" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

