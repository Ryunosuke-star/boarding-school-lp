"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Sun } from "lucide-react"

function SupportSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-bsc-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-6 underline underline-offset-4 decoration-red-500">
            BSC's Support
          </h2>
          <p className="text-gray-700">
            ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000"
        >
          {/* ボーディングスクール留学サポート */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="card group"
          >
            <div className="relative overflow-hidden bg-white shadow-md rounded-lg">
              <img
                src="/images/support-boarding.jpg"
                alt="ボーディングスクールサポート"
                className="w-full h-64 object-cover"
              />
              <div className="bg-black text-white text-center py-2">
                <div className="font-bold">ボーディングスクール留学のサポート内容</div>
                <div className="text-sm">（1年以上の長期留学）</div>
              </div>
              <div className="p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✔ 個別カウンセリング</li>
                  <li>✔ 学校選定アドバイス</li>
                  <li>✔ 出願戦略の立案</li>
                  <li>✔ スケジュール管理</li>
                  <li>✔ 必要書類の準備</li>
                  <li>✔ 出願書類の添削</li>
                  <li>✔ 願書提出サポート</li>
                  <li>✔ 面接練習</li>
                  <li>✔ 保護者への報告</li>
                  <li>✔ 合格後の手続き支援</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://boardingschool.jp/support-boarding-school/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* サマースクールプログラムサポート */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card group"
          >
            <div className="relative overflow-hidden bg-white shadow-md rounded-lg">
              <img
                src="/images/support-summer.jpg"
                alt="サマースクールプログラムサポート"
                className="w-full h-64 object-cover"
              />
              <div className="bg-black text-white text-center py-2">
                <div className="font-bold">サマースクールプログラムのサポート内容</div>
                <div className="text-sm">（2～5週間の短期留学）</div>
              </div>
              <div className="p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✔ プログラム選定アドバイス</li>
                  <li>✔ 応募書類の準備と提出サポート</li>
                  <li>✔ 英語力確認・事前課題サポート</li>
                  <li>✔ 現地スタッフとの連携</li>
                  <li>✔ 出発前の生活オリエンテーション</li>
                  <li>✔ 渡航前後のサポート</li>
                  <li>✔ 緊急時対応</li>
                  <li>✔ 保護者への報告</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://boardingschool.jp/support-summer-school/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300"
                  >
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

export default SupportSection
