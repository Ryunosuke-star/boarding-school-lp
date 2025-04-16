'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-white">
      {/* ロゴ */}
      <div className="bg-white px-4 py-2">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* ナビゲーションメニュー */}
      <nav className="flex-1">
        <ul className="flex justify-end flex-wrap sm:flex-nowrap text-white text-sm sm:text-[1.25rem] font-medium w-full">
          <li className="bg-[#c6a664] px-4 py-6 border-l border-white whitespace-nowrap">
            <Link href="#about" className="block text-center hover:underline">
              会社情報
            </Link>
          </li>
          <li className="bg-[#c6a664] px-4 py-6 border-l border-white whitespace-nowrap">
            <Link href="#programs" className="block text-center hover:underline">
              留学プログラム
            </Link>
          </li>
          <li className="bg-[#c6a664] px-4 py-6 border-l border-white whitespace-nowrap">
            <Link href="#support" className="block text-center hover:underline">
              BSCのサポート
            </Link>
          </li>
          <li className="bg-[#c6a664] px-4 py-6 border-l border-white whitespace-nowrap">
            <Link href="#contact" className="block text-center hover:underline">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
