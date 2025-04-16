"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";


export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        className="absolute bottom-24 left-8 md:left-20 text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto mb-4">
        <Image
  src="/images/forthe.png" // ← ここを小文字に修正
  alt="For the"
  fill
  className="object-contain"
  priority
/>
        </div>
        <div className="relative h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto">
          <Image
            src="/images/Future.png"
            alt="Future"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={scrollToAbout}>
          <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
