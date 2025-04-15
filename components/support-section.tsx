"use client";
import Image from "next/image";
import Link from "next/link";

const SupportSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 underline decoration-bsc-red mb-4">
          BSC's Support
        </h2>
        <p className="text-center text-sm mb-10 text-gray-600">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boarding School Support */}
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src="/images/bsc-boardingschool-support.jpg"
              alt="BSC Boarding School Support"
              width={800}
              height={400}
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-bsc-blue text-sm font-semibold mb-4">
                ボーディングスクール留学のサポート内容
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>個別カウンセリング</li>
                <li>学校選定アドバイス</li>
                <li>出願書類の確認</li>
                <li>スケジュール管理</li>
                <li>必要書類の準備</li>
                <li>出願書類の添削</li>
                <li>面接指導</li>
                <li>渡航前のサポート</li>
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

          {/* Summer School Support */}
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src="/images/bsc-summerschool-support.jpg"
              alt="BSC Summer School Support"
              width={800}
              height={400}
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-bsc-blue text-sm font-semibold mb-4">
                サマースクールプログラムのサポート内容
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
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
