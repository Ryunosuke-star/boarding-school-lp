// components/navigation.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md flex">
      {/* 左：ロゴ部分（白背景） */}
      <div className="bg-white flex items-center px-6 py-4">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* 右：ナビゲーション（#c6a664背景 & 左詰） */}
      <nav className="flex-grow bg-[#c6a664] text-white text-lg font-medium flex items-center">
        <ul className="flex ml-4">
          {[
            { href: "#about", label: "会社情報" },
            { href: "#programs", label: "留学プログラム" },
            { href: "#support", label: "BSCのサポート" },
            { href: "#contact", label: "お問い合わせ" },
          ].map((item, index) => (
            <li
              key={item.href}
              className={`px-6 py-4 hover:underline border-l border-white ${
                index === 0 ? "border-l-0" : ""
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
