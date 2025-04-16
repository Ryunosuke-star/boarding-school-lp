"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-bsc-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold text-center mb-6 relative inline-block after:block after:w-full after:h-1 after:bg-red-500 after:mt-1">
            Our Programs
        </h2>
          <p className="text-gray-700 text-lg">
            ボーディングスクールコンサルティングでは、生徒の皆さんに最適な留学プログラムをご提案しています。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000"
        >
          {/* ボーディングスクール留学 */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="card group"
          >
            <div className="relative overflow-hidden bg-white shadow-md rounded-lg">
              <a href="https://boardingschool.jp/about/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/boarding-school.png"
                  alt="ボーディングスクール留学について"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-bsc-red">ボーディングスクール留学</h3>
                <p className="text-gray-700 text-lg mb-4">
                  世界トップクラスのボーディングスクールへの留学をサポートします。アメリカ、イギリス、カナダ、スイスなど、各国の一流校への入学をお手伝いします。
                </p>
                <ul className="text-gray-700 text-sm space-y-2 mb-6">
                  <li>➤ 学校選定から出願まで一貫したサポート</li>
                  <li>➤ 入学試験・面接対策</li>
                  <li>➤ ビザ取得サポート</li>
                  <li>➤ 出発前オリエンテーション</li>
                </ul>
                <div className="mt-6">
                  <a href="https://boardingschool.jp/about/" className="bg-bsc-gold text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* サマースクールプログラム */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card group"
          >
            <div className="relative overflow-hidden bg-white shadow-md rounded-lg">
              <a href="https://boardingschool.jp/summer-school/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/summer-program.png"
                  alt="サマースクールプログラムについて"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#36869D" }}>サマースクールプログラム</h3>
                <p className="text-gray-700 text-lg mb-4">
                  夏休み期間を利用した短期留学プログラムです。語学力の向上はもちろん、現地の文化体験や国際交流を通じて、グローバルな視野を広げることができます。
                </p>
                <ul className="text-gray-700 text-sm space-y-2 mb-6">
                  <li>➤ 2週間〜8週間の短期プログラム</li>
                  <li>➤ 英語集中コース</li>
                  <li>➤ アカデミックコース</li>
                  <li>➤ スポーツ・芸術活動</li>
                </ul>
                <div className="mt-6">
                  <a href="https://boardingschool.jp/summer-school/" className="bg-bsc-gold text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
