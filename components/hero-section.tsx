"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ナビゲーションバー */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2 bg-white px-4 py-2">
            <Image
              src="/images/bsc-logo.jpg"
              alt="Boarding School Consulting Inc."
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
          <nav className="text-white text-[1.5rem] bg-[#c6a664] flex-1 flex justify-end space-x-6 px-6 py-4 font-medium">
            <a href="#about" className="hover:underline">会社情報</a>
            <a href="#programs" className="hover:underline">留学プログラム</a>
            <a href="#support" className="hover:underline">BSCのサポート</a>
            <a href="#contact" className="hover:underline">お問い合わせ</a>
          </nav>
        </div>
      </div>

      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      <motion.div
        className="absolute bottom-24 left-8 md:left-20 text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-text text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          For the
        </h1>
        <h1 className="hero-text text-bsc-red text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          Future
        </h1>
      </motion.div>
    </section>
  );
}
