import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
      <Link href="/" className="flex items-center ml-4">
          <div className="relative h-10 w-auto">
            <img 
              src="/logo.png" 
              alt="Paideia Hosting" 
              className="h-10 w-auto"
            />
            <span className="hidden text-xl font-bold">Paideia Hosting</span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/plugins" className="text-sm font-medium transition-colors hover:text-primary">
            Plugins
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-4">
          <Link href="https://shop.paideiahosting.net/my" className="text-sm font-medium transition-colors hover:text-primary hidden md:block">
            Log in
          </Link>
          <Link href="/contact">
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden mr-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/plugins" className="text-sm font-medium transition-colors hover:text-primary">
                    Plugins
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                    Pricing
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="https://shop.paideiahosting.net/my" className="text-sm font-medium transition-colors hover:text-primary">
                    Log in
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact">
                    <Button variant="default" size="sm" className="mt-4">
                      Get Started
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
