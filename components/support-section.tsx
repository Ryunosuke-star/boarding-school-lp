"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="py-16 px-4 text-[1.25rem]">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold border-b-4 border-red-500 inline-block">
          BSC's Support
        </h2>
        <p className="text-sm mt-2">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、
          生徒の皆さんを全面的にサポートします。
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
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
              <h3 className="text-base font-semibold mb-2 text-bsc-red">
                ボーディングスクール留学のサポート内容
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>個別カウンセリング</li>
                <li>学校選定アドバイス</li>
                <li>出願書類の確認</li>
                <li>スケジュール管理</li>
                <li>必要書類の準備</li>
                <li>出願締切の対策</li>
                <li>面接対策</li>
                <li>渡航前後のサポート</li>
                <li>保護者への報告</li>
                <li>合格後の手続き支援</li>
              </ul>
            </div>
            <div className="mt-6">
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
              <h3 className="text-base font-semibold mb-2 text-bsc-blue">
                サマースクールプログラムのサポート内容
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>プログラム選定アドバイス</li>
                <li>応募書類の準備と提出サポート</li>
                <li>英語力確認・事前課題サポート</li>
                <li>現地スタッフとの連携</li>
                <li>出発前の生活オリエンテーション</li>
                <li>渡航前後のサポート</li>
                <li>緊急時対応</li>
                <li>保護者への報告</li>
              </ul>
            </div>
            <div className="mt-6">
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
