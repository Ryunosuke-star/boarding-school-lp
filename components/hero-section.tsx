import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* ロゴとナビゲーション */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30">
        <Image
          src="/BSC_LOGO_W.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="drop-shadow-md"
        />
        <nav className="text-white space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">会社情報</a>
          <a href="#programs" className="hover:underline">留学プログラム</a>
          <a href="#support" className="hover:underline">BSCのサポート</a>
          <a href="#contact" className="hover:underline">お問い合わせ</a>
        </nav>
      </div>

      <motion.div
        className="absolute bottom-24 left-8 md:left-20 text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          For the
          <br />
          Future
        </h1>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <span className="text-white text-2xl animate-bounce">▼</span>
      </div>
    </section>
  );
}
