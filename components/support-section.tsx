"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupportSection() {
  return (
<section id="support" className="py-16 px-4 text-[1.25rem] scroll-mt-24">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block">
          BSC's Support
        </h2>
        <p className="text-base text-gray-700 mt-2">
        BSCは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>
      </div>

      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Boarding School Box */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 flex flex-col">
          <Link href="https://boardingschool.jp/support-boarding-school/" passHref>
            <div className="overflow-hidden group cursor-pointer">
              <Image
                src="/images/boarding-support.png"
                alt="BSC Boarding School Support"
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
            <p className="text-gray-700 text-lg mb-4">
            BSCは、留学相談から卒業までを包括的に支援し、豊富な知見に基づく学校選定と進学コンサルティングを提供します。
              国内外のネットワークを活かし、長期的な学びと成長を支えます。</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
              <li>4月：留学相談</li>
              <li>6～11月：学校選定コンサルティング</li>
              <li>7～2月：受験サポート</li>
              <li>11～2月：出願・願書提出</li>
              <li>1～4月：合格発表</li>
              <li>3～4月：進学先決定コンサルティング</li>
              <li>4月：入学準備手続き／入学書類の準備と提出</li>
              <li>5月：学生ビザ取得サポート</li>
              <li>6～8月：渡航直前までの準備サポート</li>
              <li>9月：入学</li>
              <li>～翌年夏：留学中のサポートとコンサルティング</li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="https://boardingschool.jp/support-boarding-school/"
                className="inline-block bg-[#c6a664] text-white py-2 px-4 rounded shadow hover:opacity-90 transition"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>

        {/* Summer School Box */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 flex flex-col">
          <Link href="https://boardingschool.jp/support-summer-school/" passHref>
            <div className="overflow-hidden group cursor-pointer">
              <Image
                src="/images/summer-support.png"
                alt="BSC Summer School Support"
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
            <p className="text-gray-700 text-lg mb-4">
            BSCは、お子様の興味や年齢に応じたプログラムを提案し、各家庭に寄り添った個別支援を提供します。
              また、短期だけでなく将来を見据えた成長につながる学びを重視し、安心して挑戦できる環境を整えます。</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
              <li>10～5月：サマースクールプログラムの紹介、申込手続き／出願作業</li>
              <li>参加時期確定次第：入学書類の作成、海外留学生保険の手続き、航空券・現地空港送迎の手配 等</li>
              <li>6～7月：渡航前オリエンテーションの実施</li>
              <li>6～8月：現地校への連絡代行、緊急時の対応 等</li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="https://boardingschool.jp/support-summer-school/"
                className="inline-block bg-[#c6a664] text-white py-2 px-4 rounded shadow hover:opacity-90 transition"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
