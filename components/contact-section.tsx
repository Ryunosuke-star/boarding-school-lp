"use client"

import { Mail, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactSection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-bsc-light">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-6 underline underline-offset-4 decoration-red-500">
            Contact
          </h2>
          <p className="text-gray-700">お問い合わせ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000">
          {/* お問い合わせフォーム */}
          <div
            onClick={() => router.push("/contact-form")}
            className="group relative overflow-hidden bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow min-h-[320px] border-t-4 border-black"
          >
            <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <p className="text-sm text-gray-700 font-semibold mb-2">フォームでのお問い合わせ</p>
            <button className="inline-flex items-center bg-white border border-black rounded-full px-4 py-2 font-semibold hover:bg-black hover:text-white transition-colors">
              お問い合わせフォーム
            </button>
          </div>

          {/* 電話でのお問い合わせ */}
          <a
            href="tel:0365551642"
            className="group relative overflow-hidden bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow min-h-[320px] border-t-4 border-black"
          >
            <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <p className="text-sm text-gray-700 font-semibold mb-2">電話でのお問い合わせ</p>
            <p className="text-sm text-gray-700">
              03-6555-1642 <span className="text-xs">[平日 10:00-17:00]</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
