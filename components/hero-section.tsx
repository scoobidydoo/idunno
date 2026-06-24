import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, telHref, whatsappHref } from "@/lib/site"

export function HeroSection() {
  return (
    <section id="home" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold">
            <span className="text-accent">Farm fresh dairy, sweets &amp; daily grocery</span>
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Pure, Fresh Dairy Delivered to Your Family
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {site.name}{" "}brings you fresh milk, dahi, ghee, paneer and peda made the traditional way —
            along with everyday grocery essentials. Just call or message us and we&apos;ll take care of your order.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="rounded-full font-semibold"
              render={
                <a href={telHref}>
                  <Phone className="h-4 w-4" />
                  Call to Order
                </a>
              }
            />
            <Button
              size="lg"
              nativeButton={false}
              className="rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
              render={
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              }
            />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Order support available · <span className="text-foreground">{site.phoneDisplay}</span>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <Image
              src="/images/hero-milk.png"
              alt="Fresh milk, ghee, paneer and curd arranged on a rustic wooden table"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
