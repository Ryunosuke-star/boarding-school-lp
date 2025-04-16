"use client"

import Navigation from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProgramsSection from "@/components/programs-section"
import SupportSection from "@/components/support-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </>
  )
}
