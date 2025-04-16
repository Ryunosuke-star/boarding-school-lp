'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-white">
      {/* ロゴエリア */}
      <div className="bg-white px-4 py-2">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* ナビゲーション */}
      <nav className="flex-1">
        <ul className="flex justify-end flex-wrap sm:flex-nowrap text-white text-sm sm:text-base font-medium">
          <li className="bg-[#c6a664] px-4 py-5 border-l border-white whitespace-nowrap">
            <a href="#about" className="block text-center hover:underline">会社情報</a>
          </li>
          <li className="bg-[#c6a664] px-4 py-5 border-l border-white whitespace-nowrap">
            <a href="#programs" className="block text-center hover:underline">留学プログラム</a>
          </li>
          <li className="bg-[#c6a664] px-4 py-5 border-l border-white whitespace-nowrap">
            <a href="#support" className="block text-center hover:underline">BSCのサポート</a>
          </li>
          <li className="bg-[#c6a664] px-4 py-5 border-l border-white whitespace-nowrap">
            <a href="#contact" className="block text-center hover:underline">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
