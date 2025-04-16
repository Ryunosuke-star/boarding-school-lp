"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
<section id="programs" className="py-24 bg-bsc-light scroll-mt-24">
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto mb-16 text-center">
      <h2 className="text-4xl font-bold text-center mb-6 relative inline-block after:block after:w-full after:h-1 after:bg-red-500 after:mt-1">
        Our Programs
      </h2>
      <p className="text-base text-gray-700 mt-2">
      ボーディングスクールコンサルティングでは、お子様の希望に合わせた最適な留学プログラムをご提案しています。
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
        <div className="relative overflow-hidden bg-white shadow-md rounded-lg h-full flex flex-col">
          <a href="https://boardingschool.jp/about/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/boarding-school.png"
              alt="ボーディングスクール留学について"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>

          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold mb-4 text-bsc-red">ボーディングスクール留学</h3>
              <p className="text-gray-700 text-lg mb-4">
                ボーディングスクールは、志・目標を持つ学生が世界中から集う全寮制の私立校です。
                国際的視野とリーダーシップを育成するうえで最高峰の教育環境を提供します。
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>➤ 卓越した学習環境</li>
                <li>➤ 自立心と責任感の形成</li>
                <li>➤ 多様性への理解</li>
                <li>➤ 豊富な課外活動</li>
                <li>➤ キャリア教育と大学進学サポート</li>
                <li>➤ 最先端の設備とテクノロジーの導入</li>                  
                <li>➤ リーダーシップ教育と社会的責任</li>
              </ul>
            </div>
            <div className="mt-6 text-left">
              <a href="https://boardingschool.jp/about/" 
              className="inline-block bg-[#c6a664] text-white py-2 px-4 rounded shadow hover:opacity-90 transition">
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
        <div className="relative overflow-hidden bg-white shadow-md rounded-lg h-full flex flex-col">
          <a href="https://boardingschool.jp/summer-school/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/summer-program.png"
              alt="サマースクールプログラムについて"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>

          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#36869D" }}>サマースクールプログラム</h3>
              <p className="text-gray-700 text-lg mb-4">
                サマースクールプログラムは、語学力の向上とともに、多様な文化や価値観への理解を深め、国際的視野を養う貴重な機会です。
                将来的な長期留学の準備として活用することも可能です。
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>➤ 多様な文化体験/世界に対する興味と理解を身につける異文化理解</li>
                <li>➤ 個人の成長と自立心の育成/将来のボーディングスクール留学へのステップ</li>
                <li>➤ 効果的な英語学習</li>
                <li>➤ 英語学習にプラスアルファした特定のプログラムの提供</li>
              </ul>
            </div>
            <div className="mt-6 text-left">
              <a href="https://boardingschool.jp/summer-school/" className="inline-block bg-[#c6a664] text-white py-2 px-4 rounded shadow hover:opacity-90 transition">
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
