import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import SupportSection from "@/components/support-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex">
          <div className="bg-white p-4">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header> */}

      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <SupportSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
