import { Phone, MessageCircle, MapPin, Clock, Headset } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, telHref, whatsappHref, mapsHref, mapsEmbedSrc } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Visit or Order From Us
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Call or message us anytime to place an order — our team is ready to help you with fresh dairy and grocery.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-card-foreground">Call Us</h3>
                <a href={telHref} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-card-foreground">Our Address</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{site.address}</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-card-foreground">Shop Hours</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Monday – Saturday: 6:00 AM – 9:00 PM
                  <br />
                  Sunday: 6:00 AM – 1:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Headset className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-card-foreground">Order Support</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Need help placing an order? Call or WhatsApp us and we&apos;ll assist you right away.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                className="flex-1 rounded-full font-semibold"
                render={
                  <a href={telHref}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                }
              />
              <Button
                size="lg"
                nativeButton={false}
                className="flex-1 rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                render={
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                title={`Map showing the location of ${site.name}`}
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full lg:h-full"
              />
            </div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
