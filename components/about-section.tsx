import { Heart, Truck, Users } from "lucide-react"

const points = [
  {
    icon: Heart,
    title: "Community Health First",
    description: "We believe wholesome dairy is the foundation of a healthy family and a stronger community.",
  },
  {
    icon: Users,
    title: "Supporting Local Farmers",
    description: "Every purchase directly supports the hardworking farmers in our region.",
  },
  {
    icon: Truck,
    title: "Daily Fresh Delivery",
    description: "From the farm to your home within hours — never frozen, never stale.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Committed to Your Family&apos;s Health
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Awadh Dudh Dairy began with a simple promise — to deliver dairy as pure and fresh as nature intended. For
            years, families across our neighbourhood have trusted us for milk, dahi, ghee, paneer, fresh sweets, and
            everyday grocery essentials.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            We work hand in hand with local farms, uphold strict hygiene standards, and treat every order as if it were
            for our own family. Just call or message us — our order support team is always ready to help.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <point.icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-card-foreground">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
