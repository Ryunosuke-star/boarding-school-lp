"use client"

import { Mail, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactSection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">Contact</h2>
          <p className="text-gray-600">お問い合わせ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* お問い合わせフォーム */}
          <div
            onClick={() => router.push("/contact-form")}
            className="bg-white p-8 rounded-lg shadow-custom relative h-[340px] flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="absolute top-6">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Mail size={24} />
              </div>
            </div>
            <div className="mt-16">
              <button className="inline-flex items-center bg-white border border-black rounded-full px-4 py-2 font-semibold hover:bg-black hover:text-white transition-colors">
                お問い合わせフォーム
              </button>
            </div>
          </div>

          {/* 電話でのお問い合わせ */}
          <a
            href="tel:0365551642"
            className="bg-white p-8 rounded-lg shadow-custom relative h-[340px] flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Phone size={24} />
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="font-semibold">電話でのお問い合わせ</p>
              <p className="text-sm text-gray-600 mt-2">
                03-6555-1642 <span className="text-xs">[平日 10:00-17:00]</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
