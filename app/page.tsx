import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { AdSenseBanner } from "@/components/adsense-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* AdSense Banner después del Hero */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AdSenseBanner
            adSlot="1234567890"
            className="max-w-4xl mx-auto"
            style={{ display: "block", textAlign: "center", minHeight: "250px" }}
          />
        </div>
      </section>

      <BlogSection />

      {/* AdSense Banner antes del Footer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <AdSenseBanner
            adSlot="0987654321"
            className="max-w-4xl mx-auto"
            style={{ display: "block", textAlign: "center", minHeight: "250px" }}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
