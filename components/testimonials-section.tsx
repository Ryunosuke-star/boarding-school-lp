"use client"

export function TestimonialsSection() {
  return null
}


import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 bg-bsc-light relative">
      {/* 背景装飾を削除 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">お客様の声</h2>
          <p className="text-bsc-gray max-w-3xl mx-auto mt-6">
            ボーディングスクールコンサルティングを通じて留学された方々からのメッセージをご紹介します。
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-custom relative">
            <div className="absolute -top-5 -left-5 text-bsc-red opacity-20">
              <Quote size={48} />
            </div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 relative mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=100&width=100" alt="田中さん" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-lg">田中さん</h4>
                <p className="text-sm text-bsc-gray">アメリカ・フィリップス・エクセター・アカデミー卒業</p>
              </div>
            </div>
            <p className="text-bsc-gray leading-relaxed">
              「BSCのサポートのおかげで、憧れの学校に合格することができました。出願書類の準備から面接対策まで、きめ細かいアドバイスをいただき、自信を持って受験に臨むことができました。留学中も定期的に連絡をいただき、安心して学校生活を送ることができました。」
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom relative md:transform md:translate-y-8">
            <div className="absolute -top-5 -left-5 text-bsc-gold opacity-20">
              <Quote size={48} />
            </div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 relative mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=100&width=100" alt="佐藤さん" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-lg">佐藤さん</h4>
                <p className="text-sm text-bsc-gray">イギリス・イートン・カレッジ卒業</p>
              </div>
            </div>
            <p className="text-bsc-gray leading-relaxed">
              「初めての海外留学で不安でしたが、BSCのコンサルタントの方が親身になって相談に乗ってくださいました。学校選びから始まり、現地での生活についてのアドバイスまで、常に的確なサポートをいただきました。おかげで充実した留学生活を送ることができました。」
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom relative">
            <div className="absolute -top-5 -left-5 text-bsc-dark opacity-20">
              <Quote size={48} />
            </div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 relative mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=100&width=100" alt="鈴木さん" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-lg">鈴木さん（保護者）</h4>
                <p className="text-sm text-bsc-gray">カナダ・アッパーカナダカレッジ在学中</p>
              </div>
            </div>
            <p className="text-bsc-gray leading-relaxed">
              「子どもの留学を決めるにあたり、多くの不安がありましたが、BSCの丁寧な説明と手厚いサポート体制に安心感を覚えました。留学中も定期的に学校との連絡を取っていただき、子どもの様子を詳しく知ることができています。保護者としても大変心強いです。」
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
