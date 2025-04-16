"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

      {/* ロゴメッセージ */}
      <motion.div
        className="absolute bottom-24 left-8 md:left-20 text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto mb-4">
          <Image
            src="/images/forthe.png"
            alt="For the"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative h-[6rem] md:h-[8rem] lg:h-[10rem] w-auto">
          <Image
            src="/images/future.png"
            alt="Future"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* 下向き矢印 */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-white cursor-pointer animate-bounce" />
      </motion.div>
    </section>
  );
}
