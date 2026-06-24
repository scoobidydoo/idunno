import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "Fresh Milk (Dudh)",
    image: "/images/whole-milk.png",
    description: "Rich, creamy full-cream milk delivered fresh from farm to doorstep each morning.",
  },
  {
    name: "Thick Creamy Dahi",
    image: "/images/dahi.png",
    description: "Naturally set, thick and creamy curd with a mild, wholesome taste.",
  },
  {
    name: "Pure Desi Ghee",
    image: "/images/desi-ghee.png",
    description: "Golden, aromatic ghee made the traditional way for unmatched flavor and purity.",
  },
  {
    name: "Fresh Paneer",
    image: "/images/paneer.png",
    description: "Soft, fresh cottage cheese made daily — perfect for your favorite home recipes.",
  },
  {
    name: "Milk Peda & Sweets",
    image: "/images/peda.png",
    description: "Soft, melt-in-the-mouth milk peda and traditional sweets made fresh — a treat for every occasion.",
    comingSoon: true,
  },
  {
    name: "Grocery Essentials",
    image: "/images/grocery.png",
    description: "Everyday grocery staples — rice, pulses, spices and more, all under one trusted roof.",
    comingSoon: true,
  },
]

export function ProductCatalog() {
  return (
    <section id="products" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Products
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Fresh dairy, traditional sweets, and everyday grocery essentials — all under one trusted roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden border-border/60 pt-0">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.comingSoon ? (
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                    Coming Soon
                  </span>
                ) : null}
              </div>
              <CardContent className="flex flex-col gap-2 px-5">
                <h3 className="text-lg font-semibold text-card-foreground">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
