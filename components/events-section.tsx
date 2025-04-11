"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"

export function EventsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Events</h2>
          <p className="text-bsc-gray max-w-3xl mx-auto mt-6">
            ボーディングスクールコンサルティングでは、留学に関する様々なイベントを開催しています。
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="留学説明会"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-bsc-red text-white px-3 py-1 rounded-full text-sm font-bold">
                オンライン
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-bsc-dark">留学説明会</h3>
              <p className="text-bsc-gray mb-6 leading-relaxed">
                ボーディングスクール留学の基礎知識から出願のポイントまで、留学を検討されている方に役立つ情報をご提供します。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-bsc-gray">
                  <Calendar className="text-bsc-red mr-3" size={18} />
                  <span>2023年6月10日（土）</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <Clock className="text-bsc-red mr-3" size={18} />
                  <span>14:00〜16:00</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <MapPin className="text-bsc-red mr-3" size={18} />
                  <span>オンライン開催（Zoom）</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <Users className="text-bsc-red mr-3" size={18} />
                  <span>定員20名（先着順）</span>
                </div>
              </div>
              <a href="#contact" className="btn-primary inline-block">
                参加申し込み
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="学校別説明会"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-bsc-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                対面
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-bsc-dark">学校別説明会</h3>
              <p className="text-bsc-gray mb-6 leading-relaxed">
                各国の名門ボーディングスクールの特徴や入学要件、学校生活などについて詳しくご紹介します。学校関係者をゲストにお招きすることもあります。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-bsc-gray">
                  <Calendar className="text-bsc-gold mr-3" size={18} />
                  <span>2023年7月15日（土）</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <Clock className="text-bsc-gold mr-3" size={18} />
                  <span>13:00〜15:00</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <MapPin className="text-bsc-gold mr-3" size={18} />
                  <span>東京オフィス</span>
                </div>
                <div className="flex items-center text-bsc-gray">
                  <Users className="text-bsc-gold mr-3" size={18} />
                  <span>定員15名（先着順）</span>
                </div>
              </div>
              <a href="#contact" className="btn-primary inline-block">
                参加申し込み
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
