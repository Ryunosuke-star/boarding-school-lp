"use client"

import { AboutSection } from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProgramsSection from "@/components/programs-section" // ✅ 修正：named → default import
import { SupportSection } from "@/components/support-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </>
  )
}
