"use client";

import Image from "next/image";
import Link from "next/link";

const SupportSection = () => {
  return (
    <section className="bg-bsc-beige py-12 px-4 text-bsc-brown">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold underline decoration-bsc-red decoration-2 underline-offset-4 mb-4">
          BSC's Support
        </h2>
        <p className="text-sm">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-8">
        {/* ボーディングスクール */}
        <div className="bg-white shadow-md rounded-md overflow-hidden w-full lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src="/images/bsc-support-boarding.jpg"
              alt="BSC Boarding School Support"
              width={800}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 text-left text-sm">
            <h3 className="text-bsc-blue font-semibold mb-2">
              ボーディングスクール留学のサポート内容
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>個別カウンセリング</li>
              <li>学校選定アドバイス</li>
              <li>出願書類の確認</li>
              <li>スケジュール管理</li>
              <li>必要書類の準備</li>
              <li>出願締切の対策</li>
              <li>面接指導</li>
              <li>渡航前後のサポート</li>
              <li>保護者への報告</li>
              <li>合格後の手続き支援</li>
            </ul>
            <Link href="/bscs-support">
              <div className="inline-block mt-4 bg-yellow-200 hover:bg-yellow-300 text-bsc-brown py-2 px-4 rounded shadow transition">
                詳細を見る
              </div>
            </Link>
          </div>
        </div>

        {/* サマースクール */}
        <div className="bg-white shadow-md rounded-md overflow-hidden w-full lg:w-[500px]">
          <div className="overflow-hidden">
            <Image
              src="/images/bsc-support-summer.jpg"
              alt="BSC Summer School Support"
              width={800}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 text-left text-sm">
            <h3 className="text-bsc-blue font-semibold mb-2">
              サマースクールプログラムのサポート内容
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>プログラム選定アドバイス</li>
              <li>応募書類の準備と提出サポート</li>
              <li>英語力確認・事前課題サポート</li>
              <li>現地スタッフとの連携</li>
              <li>出発前の生活オリエンテーション</li>
              <li>渡航前後のサポート</li>
              <li>緊急時対応</li>
              <li>保護者への報告</li>
            </ul>
            <Link href="/bscs-support">
              <div className="inline-block mt-4 bg-yellow-200 hover:bg-yellow-300 text-bsc-brown py-2 px-4 rounded shadow transition">
                詳細を見る
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
