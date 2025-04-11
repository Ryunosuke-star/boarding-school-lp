"use client"

import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-24 bg-bsc-light">
      {/* 背景画像を削除 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact</h2>
          <p className="text-bsc-gray max-w-3xl mx-auto mt-6">
            ボーディングスクール留学についてのご質問やご相談は、お気軽にお問い合わせください。
          </p>
        </div>

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-custom">
            <h3 className="text-2xl font-bold mb-6 text-bsc-dark">お問い合わせ先</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bsc-red/10 p-3 rounded-full mr-4">
                  <MapPin className="text-bsc-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bsc-dark mb-1">住所</h4>
                  <p className="text-bsc-gray">〒123-4567 東京都渋谷区○○町1-2-3</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bsc-gold/10 p-3 rounded-full mr-4">
                  <Phone className="text-bsc-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bsc-dark mb-1">電話番号</h4>
                  <p className="text-bsc-gray">03-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bsc-dark/10 p-3 rounded-full mr-4">
                  <Mail className="text-bsc-dark" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bsc-dark mb-1">メールアドレス</h4>
                  <p className="text-bsc-gray">info@boardingschool.jp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white rounded-lg shadow-custom p-8">
            <h3 className="text-2xl font-bold mb-6 text-bsc-dark">お問い合わせフォーム</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-bsc-dark font-medium mb-2">
                    お名前 <span className="text-bsc-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bsc-gold focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-bsc-dark font-medium mb-2">
                    メールアドレス <span className="text-bsc-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bsc-gold focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-bsc-dark font-medium mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bsc-gold focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-type" className="block text-bsc-dark font-medium mb-2">
                    お問い合わせ内容 <span className="text-bsc-red">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bsc-gold focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="boarding-school">ボーディングスクール留学について</option>
                    <option value="summer-program">サマープログラムについて</option>
                    <option value="event">イベントについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-bsc-dark font-medium mb-2">
                  メッセージ <span className="text-bsc-red">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bsc-gold focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
