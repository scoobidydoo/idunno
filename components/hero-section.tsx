import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
            <span className="text-accent">Farm fresh, every single day</span>
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Pure, Fresh, and Wholesome Dairy Delivered to Your Family
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            At Awadh Dudh Dairy, we bring you milk and dairy products of uncompromising quality. Sourced from trusted
            local farms and delivered fresh, so your family enjoys nothing but the best.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="rounded-full font-semibold"
              render={
                <a href="#products">
                  View Our Products
                  <ArrowRight className="h-4 w-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="rounded-full font-semibold bg-transparent"
              render={<a href="#contact">Start a Subscription</a>}
            />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <Image
              src="/images/hero-milk.png"
              alt="A glass and bottle of fresh milk on a wooden table with a farm in the background"
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
