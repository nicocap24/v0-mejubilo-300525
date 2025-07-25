import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { Dashboard } from "@/components/dashboard"
import { Social } from "@/components/social"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Solution />
      <HowItWorks />
      <Dashboard />
      <Social />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
