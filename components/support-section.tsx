"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function SupportSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Boarding School Support */}
          <div className="group rounded shadow-lg overflow-hidden transition-transform duration-500 transform hover:scale-105">
            <div className="relative bg-[#b73536] text-white px-8 pt-10 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/images/boarding-support.png"
                  alt="Boarding School Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-bold text-lg">BSC's Support</h3>
              <p className="text-center text-2xl font-semibold mt-1">Boarding School</p>
            </div>
            <div className="bg-black text-white text-center py-4">
              <p className="text-sm font-bold">ボーディングスクール留学のサポート内容</p>
              <p className="text-xs">（１年以上の長期留学）</p>
            </div>
            <div className="bg-white p-6 text-sm text-gray-800 space-y-2">
              <ul className="list-none space-y-1">
                <li>✓ 個別カウンセリング</li>
                <li>✓ 学校選定アドバイス</li>
                <li>✓ 出願戦略の立案</li>
                <li>✓ スケジュール管理</li>
                <li>✓ 必要書類の準備</li>
                <li>✓ 出願書類の添削</li>
                <li>✓ 願書提出サポート</li>
                <li>✓ 面接練習</li>
                <li>✓ 保護者への報告</li>
                <li>✓ 合格後の手続き支援</li>
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

          {/* Summer School Support */}
          <div className="group rounded shadow-lg overflow-hidden transition-transform duration-500 transform hover:scale-105">
            <div className="relative bg-[#427c89] text-white px-8 pt-10 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/images/summer-support.png"
                  alt="Summer School Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-bold text-lg">BSC's Support</h3>
              <p className="text-center text-2xl font-semibold mt-1">Summer School Program</p>
            </div>
            <div className="bg-black text-white text-center py-4">
              <p className="text-sm font-bold">サマースクールプログラムのサポート内容</p>
              <p className="text-xs">（２〜５週間の短期留学）</p>
            </div>
            <div className="bg-white p-6 text-sm text-gray-800 space-y-2">
              <ul className="list-none space-y-1">
                <li>✓ プログラムの選定アドバイス</li>
                <li>✓ 応募書類の準備と提出サポート</li>
                <li>✓ 英語力確認・事前課題サポート</li>
                <li>✓ 現地スタッフとの連携</li>
                <li>✓ 出発前の生活オリエンテーション</li>
                <li>✓ 渡航前後のサポート</li>
                <li>✓ 緊急時対応</li>
                <li>✓ 保護者への報告</li>
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
        </div>
      </div>
    </section>
  )
}
