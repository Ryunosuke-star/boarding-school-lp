"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center bg-white h-[100px] shadow-md">
      {/* 左側：ロゴ */}
      <div className="w-[400px] bg-white flex items-center justify-center h-full">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* 右側：ナビゲーションリンク */}
      <nav className="flex-1 flex justify-end h-full">
        <ul className="flex h-full text-white text-lg font-medium">
          <li className="flex items-center justify-center px-8 border-l border-white bg-[#c6a664]">
            <Link href="#about" className="hover:underline">
              会社情報
            </Link>
          </li>
          <li className="flex items-center justify-center px-8 border-l border-white bg-[#c6a664]">
            <Link href="#programs" className="hover:underline">
              留学プログラム
            </Link>
          </li>
          <li className="flex items-center justify-center px-8 border-l border-white bg-[#c6a664]">
            <Link href="#support" className="hover:underline">
              BSCのサポート
            </Link>
          </li>
          <li className="flex items-center justify-center px-8 border-l border-white bg-[#c6a664]">
            <Link href="#contact" className="hover:underline">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
