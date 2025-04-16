"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="新しいヒーローイメージの説明"
        fill
        className="object-cover"
        priority
      />
      <div>
        <div
          className={`absolute bottom-0 left-0 p-10 z-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-white text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
            For the
          </h1>
          <h1 className="text-red-600 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
            Future
          </h1>
        </div>
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
          aria-label="scroll down"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  )
}
// :下向き指差し: default export を追加
export default HeroSection