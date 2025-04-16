"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      {/* ナビゲーションバー（背景付き） */}
      <div className="fixed top-0 left-0 w-full bg-[#c6a664] z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center space-x-2 bg-white px-4 py-1">
            <Image
              src="/images/bsc-logo.jpg"
              alt="Boarding School Consulting Inc."
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
          <nav className="text-white space-x-6 text-xl font-medium">
            <a href="#about" className="hover:underline">会社情報</a>
            <a href="#programs" className="hover:underline">留学プログラム</a>
            <a href="#support" className="hover:underline">BSCのサポート</a>
            <a href="#contact" className="hover:underline">お問い合わせ</a>
          </nav>
        </div>
      </div>

      {/* Hero 背景画像 */}
      <Image
        src="/images/hero.jpg"
        alt="新しいヒーローイメージの説明"
        fill
        className="object-cover"
        priority
      />

      {/* Hero テキスト */}
      <div className="absolute bottom-24 left-8 md:left-20 text-white z-10">
        <div className="relative h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[10rem] w-auto mb-4">
          <Image
            src="/images/forthe.png"
            alt="For the"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[10rem] w-auto">
          <Image
            src="/images/future.png"
            alt="Future"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 下向き矢印 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-10 cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
