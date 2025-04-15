"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="section-title text-4xl font-bold mb-4 relative inline-block">
            About Us
            {/* 下線をUsまで伸ばす */}
            <span className="block w-full h-1 bg-bsc-red absolute -bottom-2 left-0"></span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-bsc-red" />
            <Image
              src="/images/代表者.png"
              alt="代表の写真"
              width={800}
              height={600}
              className="rounded-lg shadow-custom object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-bsc-red" />
          </div>

          <div className="md:w-1/2 space-y-8 text-lg"> {/* ← フォント拡大 */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-bsc-dark">
                ボーディングスクールコンサルティング株式会社（BSC）
              </h3>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                ボーディングスクールコンサルティング株式会社は、海外のボーディングスクール（寮制学校）への留学を専門とするコンサルティング会社です。
              </p>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                私たちは、生徒一人ひとりの個性と目標に合わせた最適な学校選びから、出願手続き、入学後のサポートまで、留学の全プロセスをサポートします。
              </p>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                世界中の名門校とのネットワークを活かし、生徒たちが「未来」のために最適の教育機会を提供することを使命としています。
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-bsc-dark">代表あいさつ</h3>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                1992年の夏にアメリカのバーモント州にあるボーディングスクールが開催するサマースクールに参加するために成田空港から出発した日のことは、今でもはっきりと覚えています。
              </p>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                偏差値の高い大学に入学することが中高6年間の学校生活のゴールと言われたときに感じた違和感、どんなに勉強しても成績が伸びない英語へのコンプレックス、早く家から出て自立したいと焦る気持ち。
              </p>
              <p className="text-bsc-gray mb-4 leading-relaxed">
                その時、本屋で出会った高校留学の雑誌に書いてあったアメリカの高校への私費留学という進路。「自分の進むべき道は、これだ！」と信じた気持ちから始まった7年間に及ぶアメリカ留学。そして今、ボーディングスクール留学専門コンサルタントとして20年以上にわたり、目標、夢、志を持った日本の小中高生のボーディングスクールへの留学を全力でサポートしています。
              </p>
              <div className="mt-6">
                <p className="text-base">ボーディングスクールコンサルティング株式会社</p>
                <p className="text-base">代表取締役社長</p>
                <p className="text-xl font-signature">横山 英治</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#contact" className="btn-primary">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
