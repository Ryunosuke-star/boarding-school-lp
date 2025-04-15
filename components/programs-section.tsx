"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold underline decoration-red-500 underline-offset-8 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-700">
            ボーディングスクールコンサルティングでは、生徒の皆さんに最適な留学プログラムをご提案しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ボーディングスクール */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href="https://boardingschool.jp/support-boarding-school/">
              <Image
                src="/images/boarding-school.png"
                alt="Boarding School"
                width={800}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-red-600 text-lg font-semibold mb-2">ボーディングスクール留学</h3>
              <p className="text-gray-700 mb-4">
                世界トップクラスのボーディングスクールへの留学をサポートします。アメリカ、イギリス、カナダ、スイスなど、各国の一流校への入学をお手伝いします。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>学校選定から出願まで一貫したサポート</li>
                <li>入学試験・面接対策</li>
                <li>ビザ取得サポート</li>
                <li>出発前オリエンテーション</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="https://boardingschool.jp/support-boarding-school/"
                  className="inline-block bg-bsc-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>

          {/* サマースクール */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href="https://boardingschool.jp/support-summer-school/">
              <Image
                src="/images/summer-program.png"
                alt="Summer School Program"
                width={800}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-[#3F8CA9] text-lg font-semibold mb-2">サマースクールプログラム</h3>
              <p className="text-gray-700 mb-4">
                夏休み期間を利用した短期留学プログラムです。語学力の向上はもちろん、現地の文化体験や国際交流を通じて、グローバルな視野を広げることができます。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>2週間〜8週間の短期プログラム</li>
                <li>英語集中コース</li>
                <li>アカデミックコース</li>
                <li>スポーツ・芸術活動</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="https://boardingschool.jp/support-summer-school/"
                  className="inline-block bg-bsc-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
