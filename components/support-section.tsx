'use client';

import React from 'react';

const SupportSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2 underline decoration-red-400 underline-offset-4">
          BSC's Support
        </h2>
        <p className="text-center text-sm text-gray-700 mb-10">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の<br />
          皆さんを全面的にサポートします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boarding School */}
          <div className="rounded shadow-lg overflow-hidden">
            <div
              className="relative h-[250px] md:h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/boarding-support.png')" }}
            >
              <div className="absolute inset-0 bg-red-700 opacity-70" />
            </div>
            <div className="bg-black text-white text-sm text-center py-3">
              <div className="font-bold">ボーディングスクール留学のサポート内容</div>
              <div>（１年以上の長期留学）</div>
            </div>
            <div className="bg-white p-6 text-sm">
              <ul className="leading-relaxed text-gray-800">
                <li>✓ 個別カウンセリング</li>
                <li>✓ 学校選定アドバイス</li>
                <li>✓ 出願戦略の立案</li>
                <li>✓ スケジュール管理</li>
                <li>✓ 必要書類の準備</li>
                <li>✓ 出願書類の添削</li>
                <li>✓ 顧書提出サポート</li>
                <li>✓ 面接練習</li>
                <li>✓ 保護者への報告</li>
                <li>✓ 合格後の手続き支援</li>
              </ul>
              <div className="text-yellow-600 mt-3 hover:underline cursor-pointer">
                詳細を見る
              </div>
            </div>
          </div>

          {/* Summer School */}
          <div className="rounded shadow-lg overflow-hidden">
            <div
              className="relative h-[250px] md:h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/summer-support.png')" }}
            >
              <div className="absolute inset-0 bg-sky-700 opacity-70" />
            </div>
            <div className="bg-black text-white text-sm text-center py-3">
              <div className="font-bold">サマースクールプログラムのサポート内容</div>
              <div>（２〜５週間の短期留学）</div>
            </div>
            <div className="bg-white p-6 text-sm">
              <ul className="leading-relaxed text-gray-800">
                <li>✓ プログラム選定アドバイス</li>
                <li>✓ 応募書類の準備と提出サポート</li>
                <li>✓ 英語力確認・事前課題サポート</li>
                <li>✓ 現地スタッフとの連携</li>
                <li>✓ 出発前の生活オリエンテーション</li>
                <li>✓ 渡航前後のサポート</li>
                <li>✓ 緊急時対応</li>
                <li>✓ 保護者への報告</li>
              </ul>
              <div className="text-yellow-600 mt-3 hover:underline cursor-pointer">
                詳細を見る
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
