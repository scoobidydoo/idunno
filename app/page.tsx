import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesBanner } from "@/components/features-banner"
import { ProductCatalog } from "@/components/product-catalog"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturesBanner />
      <ProductCatalog />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
      <FloatingActions />
    </main>
  )
}
