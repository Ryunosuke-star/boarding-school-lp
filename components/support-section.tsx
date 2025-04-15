"use client";

import Image from "next/image";
import Link from "next/link";

const SupportSection = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center underline underline-offset-4 mb-4">
          BSC's Support
        </h2>
        <p className="text-center text-sm mb-12">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Boarding School Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300">
            <div className="overflow-hidden">
              <Image
                src="/images/boarding-support.png"
                alt="BSC Boarding School Support"
                width={800}
                height={400}
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-sm text-bsc-red font-bold mb-2">
                ボーディングスクール留学のサポート内容
              </h3>
              <ul className="text-sm list-disc list-inside space-y-1">
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
              <div className="mt-4">
                <Link href="/bscs-support">
                  <div className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition">
                    詳細を見る
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Summer School Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300">
            <div className="overflow-hidden">
              <Image
                src="/images/summer-support.png"
                alt="BSC Summer School Support"
                width={800}
                height={400}
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-sm text-bsc-blue font-bold mb-2">
                サマースクールプログラムのサポート内容
              </h3>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>プログラム選定アドバイス</li>
                <li>応募書類の準備と提出サポート</li>
                <li>英語力確認・事前課題サポート</li>
                <li>現地スタッフとの連携</li>
                <li>出発前の生活オリエンテーション</li>
                <li>渡航前後のサポート</li>
                <li>緊急時対応</li>
                <li>保護者への報告</li>
              </ul>
              <div className="mt-4">
                <Link href="/bscs-support">
                  <div className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition">
                    詳細を見る
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
