"use client"

import { useInView } from "react-intersection-observer"
import { CheckCircle, FileText, Globe, GraduationCap } from "lucide-react"

export function SupportSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="support" className="py-24 bg-white relative">
      {/* 背景の装飾要素を削除 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">BSC's Support</h2>
          <p className="text-bsc-gray max-w-3xl mx-auto mt-6">
            ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-custom border-t-4 border-bsc-red hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-bsc-red mb-6 inline-block p-3 bg-red-50 rounded-full">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bsc-dark">出願前サポート</h3>
            <ul className="space-y-3 text-bsc-gray">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                <span>個別カウンセリング</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                <span>学校選定アドバイス</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                <span>出願戦略の立案</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                <span>スケジュール管理</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-red mt-1 mr-2 flex-shrink-0" />
                <span>必要書類の準備</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom border-t-4 border-bsc-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-bsc-gold mb-6 inline-block p-3 bg-amber-50 rounded-full">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bsc-dark">留学中サポート</h3>
            <ul className="space-y-3 text-bsc-gray">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                <span>定期的なフォローアップ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                <span>学校との連絡調整</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                <span>緊急時対応</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                <span>学業・生活面のアドバイス</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-gold mt-1 mr-2 flex-shrink-0" />
                <span>保護者様への報告</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom border-t-4 border-bsc-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-bsc-dark mb-6 inline-block p-3 bg-gray-100 rounded-full">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bsc-dark">進路サポート</h3>
            <ul className="space-y-3 text-bsc-gray">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-dark mt-1 mr-2 flex-shrink-0" />
                <span>大学出願アドバイス</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-dark mt-1 mr-2 flex-shrink-0" />
                <span>キャリアカウンセリング</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-dark mt-1 mr-2 flex-shrink-0" />
                <span>インターンシップ紹介</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-dark mt-1 mr-2 flex-shrink-0" />
                <span>卒業後のネットワーキング</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-bsc-dark mt-1 mr-2 flex-shrink-0" />
                <span>同窓会イベント</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
