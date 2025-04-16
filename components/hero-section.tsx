import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ナビゲーションバー（背景付き） */}
      <div className="fixed top-0 left-0 w-full bg-[#c6a664] z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
          <Image
  src="/images/bsc-logo.jpg"
  alt="Boarding School Consulting Inc."
  width={180}
  height={60}
  className="object-contain"
/>

          </div>
          <nav className="text-white space-x-6 text-sm font-medium">
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
        transition={{ duration: 1.2 }}
      >
        <h1 className="hero-text text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          For the
        </h1>
        <h1 className="hero-text text-bsc-red text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          Future
        </h1>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <span className="text-white text-2xl animate-bounce">▼</span>
      </div>
    </section>
  );
}
