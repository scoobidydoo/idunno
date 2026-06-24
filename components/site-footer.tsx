import { MapPin, Milk, Phone, MessageCircle } from "lucide-react"
import { site, telHref, whatsappHref } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Milk className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">{site.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-background/70">
              Pure, fresh dairy, traditional sweets and everyday grocery — trusted by families in our neighbourhood.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-background/80">
            <p className="font-semibold text-background">Quick Links</p>
            <a href="#products" className="w-fit transition-colors hover:text-background">Products</a>
            <a href="#about" className="w-fit transition-colors hover:text-background">About Us</a>
            <a href="#contact" className="w-fit transition-colors hover:text-background">Contact</a>
          </div>

          <div className="flex flex-col gap-4 text-sm text-background/80">
            <p className="font-semibold text-background">Get in Touch</p>
            <a href={telHref} className="flex items-start gap-3 transition-colors hover:text-background">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-background"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{site.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
