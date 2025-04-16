"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center bg-white h-[100px] shadow-md">
      {/* 左：ロゴ */}
      <div className="w-[400px] bg-white flex items-center justify-center h-full">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* 右：ナビゲーション */}
      <nav className="flex-1 h-full bg-[#c6a664]">
        <ul className="flex flex-col sm:flex-row h-full text-white text-base sm:text-lg font-medium w-full">
          {[
            { href: "#about", label: "会社情報" },
            { href: "#programs", label: "留学プログラム" },
            { href: "#support", label: "BSCのサポート" },
            { href: "#contact", label: "お問い合わせ" },
          ].map((item, index) => (
            <li
              key={item.href}
              className={`flex items-center justify-center px-4 py-3 border-white bg-[#c6a664] ${
                index === 0 ? "" : "border-t sm:border-l"
              }`}
            >
              <Link href={item.href} className="w-full text-center hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
