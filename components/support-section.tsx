"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="py-16 bg-white text-[1.25em]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold mb-2">
          <span className="border-b-2 border-red-500">BSC's Support</span>
        </h2>
        <p className="text-center mb-10 text-gray-700">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* ボーディングスクール */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
            <Link href="/boarding-school">
              <img
                src="/images/boarding-support.png"
                alt="BSC Boarding School Support"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-base font-semibold text-red-500 mb-2">
                ボーディングスクール留学のサポート内容
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>個別カウンセリング</li>
                <li>学校選定アドバイス</li>
                <li>出願書類の確認</li>
                <li>スケジュール管理</li>
                <li>必要書類の準備</li>
                <li>出願時期の対策</li>
                <li>面接対策</li>
                <li>渡航前後のサポート</li>
                <li>保護者への報告</li>
                <li>合格後の手続き支援</li>
              </ul>
              <Link
                href="/boarding-school"
                className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition"
              >
                詳細を見る
              </Link>
            </div>
          </div>

          {/* サマースクール */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
            <Link href="/summer-school-program">
              <img
                src="/images/summer-support.png"
                alt="BSC Summer School Support"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                サマースクールプログラムのサポート内容
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>プログラム選定アドバイス</li>
                <li>応募書類の準備と提出サポート</li>
                <li>英語力確認・事前課題サポート</li>
                <li>現地スタッフとの連携</li>
                <li>出発前の生活オリエンテーション</li>
                <li>渡航前後のサポート</li>
                <li>緊急時対応</li>
                <li>保護者への報告</li>
              </ul>
              <Link
                href="/summer-school-program"
                className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition"
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
