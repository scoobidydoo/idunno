import { Droplet, ShieldCheck, Sprout } from "lucide-react"

const features = [
  {
    icon: Droplet,
    title: "100% Pure & Fresh",
    description: "No additives, no preservatives — just clean, natural dairy the way it should be.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienically Packed",
    description: "Processed and sealed in spotless facilities to lock in freshness and safety.",
  },
  {
    icon: Sprout,
    title: "Sourced From Local Farms",
    description: "Supporting nearby farmers and bringing you dairy from cattle you can trust.",
  },
]

export function FeaturesBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <feature.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
