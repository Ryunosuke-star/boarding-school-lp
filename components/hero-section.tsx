"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
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
      <motion.div
        className="absolute bottom-24 left-8 md:left-20 z-10 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto mb-4">
          <Image
            src="/images/forthe.png"
            alt="For the"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative z-10 h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto">
          <Image
            src="/images/future.png"
            alt="Future"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
