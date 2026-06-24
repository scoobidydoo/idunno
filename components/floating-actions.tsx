import { Phone, MessageCircle } from "lucide-react"
import { telHref, whatsappHref } from "@/lib/site"

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 gap-3 sm:hidden">
      <a
        href={telHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-lg"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  )
}
