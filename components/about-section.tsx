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
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <div className="w-20 h-1 bg-bsc-red mx-auto mt-4 mb-6 hidden"></div>
        </div>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-bsc-red"></div>
            <Image
              src="/images/代表者.png"
              alt="代表の挨拶"
              width={800}
              height={600}
              className="rounded-lg shadow-custom object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-bsc-red"></div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-bsc-dark">ボーディングスクールコンサルティング</h3>
            <p className="text-bsc-gray mb-6 leading-relaxed">
              ボーディングスクールコンサルティング株式会社は、海外のボーディングスクール（寮制学校）への留学を専門とするコンサルティング会社です。
            </p>
            <p className="text-bsc-gray mb-6 leading-relaxed">
              私たちは、生徒一人ひとりの個性と目標に合わせた最適な学校選びから、出願手続き、入学後のサポートまで、留学の全プロセスをサポートします。
            </p>
            <p className="text-bsc-gray mb-8 leading-relaxed">
              世界中の名門校とのネットワークを活かし、生徒たちが「未来」のために最適の教育機会を提供することを使命としています。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                お問い合わせ
              </a>
              <a href="#programs" className="btn-secondary">
                プログラムを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
