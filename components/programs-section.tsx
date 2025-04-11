"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export function ProgramsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 bg-bsc-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Programs</h2>
          <p className="text-bsc-gray mt-6">
            ボーディングスクールコンサルティングでは、生徒の皆さんに最適な留学プログラムをご提案しています。
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* ボーディングスクール留学 */}
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/boarding-school.png"
                alt="ボーディングスクール"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-bsc-red mb-2">ボーディングスクール留学</h3>
            <p className="text-bsc-gray leading-relaxed mb-4">
              世界トップクラスのボーディングスクールへの留学をサポートします。アメリカ、イギリス、カナダ、スイスなど、各国の一流校への入学をお手伝いします。
            </p>
            <ul className="text-sm text-bsc-gray list-disc pl-5 space-y-1 mb-4">
              <li>学校選定から出願まで一貫したサポート</li>
              <li>入学試験・面接対策</li>
              <li>ビザ取得サポート</li>
              <li>出発前オリエンテーション</li>
            </ul>
            <Link href="https://boardingschool.jp/about/" target="_blank" className="text-bsc-gold text-sm inline-flex items-center hover:underline">
              詳細を見る <span className="ml-1">↗</span>
            </Link>
          </div>

          {/* サマースクール */}
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/summer-school.png"
                alt="サマースクール"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-bsc-gold mb-2">サマースクールプログラム</h3>
            <p className="text-bsc-gray leading-relaxed mb-4">
              夏休み期間を利用した短期留学プログラムです。語学力の向上はもちろん、現地の文化体験や国際交流を通じて、グローバルな視野を広げることができます。
            </p>
            <ul className="text-sm text-bsc-gray list-disc pl-5 space-y-1 mb-4">
              <li>2週間〜8週間の短期プログラム</li>
              <li>英語集中コース</li>
              <li>アカデミックコース</li>
              <li>スポーツ・芸術活動</li>
            </ul>
            <Link href="https://boardingschool.jp/summer-school-program/" target="_blank" className="text-bsc-gold text-sm inline-flex items-center hover:underline">
              詳細を見る <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
