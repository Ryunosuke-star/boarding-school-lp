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
    <section id="programs" className="py-24 bg-bsc-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Programs</h2>
          <p className="text-bsc-gray max-w-3xl mx-auto mt-6">
            ボーディングスクールコンサルティングでは、生徒の皆さんに最適な留学プログラムをご提案しています。
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="card group">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ボーディングスクールの校舎"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-bsc-red text-white p-2 rounded-full">
                <GraduationCap size={24} />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-bsc-dark">ボーディングスクール留学</h3>
              <p className="text-bsc-gray mb-6 leading-relaxed">
                世界トップクラスのボーディングスクールへの留学をサポートします。アメリカ、イギリス、カナダ、スイスなど、各国の一流校への入学をお手伝いします。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                  <span>学校選定から出願まで一貫したサポート</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                  <span>入学試験・面接対策</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                  <span>ビザ取得サポート</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                  <span>出発前オリエンテーション</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300"
              >
                詳細を見る
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="card group">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="サマープログラムの様子"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-bsc-gold text-white p-2 rounded-full">
                <Sun size={24} />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-bsc-dark">サマースクールプログラム</h3>
              <p className="text-bsc-gray mb-6 leading-relaxed">
                夏休み期間を利用した短期留学プログラムです。語学力の向上はもちろん、現地の文化体験や国際交流を通じて、グローバルな視野を広げることができます。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                  <span>2週間〜8週間の短期プログラム</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                  <span>英語集中コース</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                  <span>アカデミックコース</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                  <span>スポーツ・芸術活動</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300"
              >
                詳細を見る
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
