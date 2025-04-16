"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex">
      {/* 左半分（ロゴ＋白背景） */}
      <div className="bg-white flex items-center justify-center px-6 h-20 w-[300px]">
        <Image
          src="/images/bsc-logo.jpg"
          alt="Boarding School Consulting Inc."
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* 右半分（ナビゲーションリンク＋ベージュ背景） */}
      <nav className="bg-[#c6a664] flex items-center text-white text-[1.25rem] font-medium h-20 w-full">
        <ul className="flex w-full h-full">
          {[
            { href: "#programs", label: "Boarding School" },
            { href: "#programs", label: "Summer School Program" },
            { href: "#support", label: "BSC's Support" },
            { href: "#events", label: "Events" },
            { href: "#about", label: "About us" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }, index) => (
            <li
              key={label}
              className={`h-full flex items-center px-6 border-white ${
                index !== 0 ? "border-l" : ""
              }`}
            >
              <Link href={href} className="hover:underline w-full text-center">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
