'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
<div className="flex w-full bg-white md:bg-transparent">
{/* 左半分：ロゴ＋白背景 */}
        <div className="bg-white px-4 py-2 flex items-center">
          <Image
            src="/images/bsc-logo.jpg"
            alt="Boarding School Consulting Inc."
            width={180}
            height={60}
            className="object-contain"
          />
        </div>

        {/* 右半分：PCナビ + ハンバーガー */}
        <div className="flex items-center justify-end flex-grow bg-[#c6a664] px-4 py-2">
          {/* ハンバーガー（モバイル） */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
          </button>

          {/* PCナビ */}
          <nav className="hidden md:flex">
            <ul className="flex text-white text-sm md:text-[1.25rem] font-medium">
              <li className="px-4 py-6 border-l border-white whitespace-nowrap">
                <Link href="#about" className="block text-center hover:underline">会社情報</Link>
              </li>
              <li className="px-4 py-6 border-l border-white whitespace-nowrap">
                <Link href="#programs" className="block text-center hover:underline">留学プログラム</Link>
              </li>
              <li className="px-4 py-6 border-l border-white whitespace-nowrap">
                <Link href="#support" className="block text-center hover:underline">BSCのサポート</Link>
              </li>
              <li className="px-4 py-6 border-l border-white whitespace-nowrap">
                <Link href="#contact" className="block text-center hover:underline">お問い合わせ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav className="md:hidden bg-[#c6a664] text-white text-center">
          <ul className="flex flex-col">
            <li className="border-t border-white">
              <Link href="#about" className="block py-4 hover:underline" onClick={() => setIsOpen(false)}>会社情報</Link>
            </li>
            <li className="border-t border-white">
              <Link href="#programs" className="block py-4 hover:underline" onClick={() => setIsOpen(false)}>留学プログラム</Link>
            </li>
            <li className="border-t border-white">
              <Link href="#support" className="block py-4 hover:underline" onClick={() => setIsOpen(false)}>BSCのサポート</Link>
            </li>
            <li className="border-t border-white">
              <Link href="#contact" className="block py-4 hover:underline" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
