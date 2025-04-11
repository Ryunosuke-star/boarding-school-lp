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
      {/* 背景オーバーレイを調整 */}
{/* <div className="absolute inset-0 bg-black/40 z-10" /> */}
<Image
        src="https://sjc.microlink.io/M-HOlDd7OGNja67j2P9Y2QUQCWuPb-l6GaN-nQmDycWV8eYkS3WTKlt0vqdXuYZ_WFWzc1vjU1n3p7G39nznhw.jpeg"
        alt="生徒たちがテディベアを投げて祝っている様子"
        fill
        className="object-cover"
        priority
      />
      <div
        className={`absolute bottom-0 left-0 p-10 z-20 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h1 className="hero-text text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">For the</h1>
        <h1 className="hero-text text-bsc-red text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">Future</h1>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  )
}
