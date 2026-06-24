import { Milk } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Milk className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground">Awadh Dudh Dairy</span>
            <span className="text-xs text-muted-foreground">Pure &amp; Fresh Since Day One</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
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

        <Button
          nativeButton={false}
          render={<a href="#contact">Contact Us</a>}
          className="rounded-full font-semibold"
        />
      </div>
    </header>
  )
}
