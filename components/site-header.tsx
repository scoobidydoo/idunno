import { Milk, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, telHref, whatsappHref } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Milk className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground">{site.name}</span>
            <span className="text-xs text-muted-foreground">{site.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Products
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            variant="outline"
            className="rounded-full font-semibold bg-transparent"
            render={
              <a href={telHref} aria-label="Call us">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call</span>
              </a>
            }
          />
          <Button
            nativeButton={false}
            className="rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
            render={
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            }
          />
        </div>
      </div>
    </header>
  )
}
