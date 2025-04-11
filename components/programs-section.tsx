"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { GraduationCap, Sun, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 bg-bsc-light relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Programs</h2>
        <p className="text-center text-bsc-gray mt-6">
          ボーディングスクールコンサルティングでは、生徒の皆さんに最適な留学プログラムをご提案しています。
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } mt-16`}
        >
          <div className="bg-white rounded-lg shadow-custom overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/images/ボーディングスクール留学.png"
                alt="ボーディングスクール"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <GraduationCap className="text-white bg-bsc-red rounded-full p-2" size={32} />
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow">
                Boarding School
              </h3>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-bsc-red mb-2">ボーディングスクール留学</h4>
              <p className="text-bsc-gray leading-relaxed mb-4">
                世界トップクラスのボーディングスクールへの留学をサポートします。アメリカ、イギリス、カナダ、スイスなど、各国の一流校への入学をお手伝いします。
              </p>
              <ul className="text-sm text-bsc-dark space-y-1 mb-4">
                <li>➤ 学校選定から出願まで一貫したサポート</li>
                <li>➤ 入学試験・面接対策</li>
                <li>➤ ビザ取得サポート</li>
                <li>➤ 出発前オリエンテーション</li>
              </ul>
              <a
                href="https://boardingschool.jp/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bsc-gold hover:underline inline-flex items-center"
              >
                詳細を見る <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-custom overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/images/サマースクールプログラム.png"
                alt="サマースクール"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Sun className="text-white bg-bsc-gold rounded-full p-2" size={32} />
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow">
                Summer School Program
              </h3>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-bsc-gold mb-2">サマースクールプログラム</h4>
              <p className="text-bsc-gray leading-relaxed mb-4">
                夏休み期間を利用した短期留学プログラムです。語学力の向上はもちろん、現地の文化体験や国際交流を通じて、グローバルな視野を広げることができます。
              </p>
              <ul className="text-sm text-bsc-dark space-y-1 mb-4">
                <li>➤ 2週間〜8週間の短期プログラム</li>
                <li>➤ 英語集中コース</li>
                <li>➤ アカデミックコース</li>
                <li>➤ スポーツ・芸術活動</li>
              </ul>
              <a
                href="https://boardingschool.jp/summer-school-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bsc-gold hover:underline inline-flex items-center"
              >
                詳細を見る <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
