import { Clock, Mail, MapPin, Milk, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Milk className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">Awadh Dudh Dairy</span>
            </div>

            <div className="flex flex-col gap-4 text-sm text-background/80">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-background">Shop Hours</p>
                  <p>Monday – Saturday: 10:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-background">Visit Us</p>
                  <p>123 Dairy Lane, Awadh Market, Your City</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-background">Call Us</p>
                  <p>+91 90000 00000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-background">Email</p>
                  <p>hello@awadhdudhdairy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 text-foreground md:p-8">
            <h3 className="text-xl font-bold">Ask About Daily Milk Subscriptions</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Leave us a message and our team will get back to you about fresh daily delivery.
            </p>
            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 90000 00000" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'd like to know more about daily milk delivery..."
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Awadh Dudh Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
