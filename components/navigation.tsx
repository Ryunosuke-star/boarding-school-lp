"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow-md`}>
      <div className="flex w-full">
        {/* 左半分：ロゴ + 白背景 */}
        <div className="bg-white flex items-center px-6 py-3">
          <Image
            src="/images/bsc-logo.jpg"
            alt="Boarding School Consulting Inc."
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* 右半分：ナビゲーション + ベージュ背景 */}
        <div className="flex-1 bg-[#c6a664] text-white px-6 py-3 flex items-center justify-end">
          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:flex space-x-6 text-[1.25rem] font-medium">
            <Link href="#about" className="hover:underline">会社情報</Link>
            <Link href="#programs" className="hover:underline">留学プログラム</Link>
            <Link href="#support" className="hover:underline">BSCのサポート</Link>
            <Link href="#contact" className="hover:underline">お問い合わせ</Link>
          </nav>

          {/* モバイル用メニューアイコン */}
          <button
            className="md:hidden text-white ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#c6a664] px-6 pb-4 pt-2 space-y-2 text-white text-lg font-medium">
          <Link href="#about" className="block hover:underline">会社情報</Link>
          <Link href="#programs" className="block hover:underline">留学プログラム</Link>
          <Link href="#support" className="block hover:underline">BSCのサポート</Link>
          <Link href="#contact" className="block hover:underline">お問い合わせ</Link>
        </div>
      )}
    </header>
  );
}