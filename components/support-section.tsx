"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SupportSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-20 bg-gray-50 text-[1.25rem]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 underline decoration-red-500 decoration-2 underline-offset-8 inline-block">
          BSC's Support
        </h2>
        <p className="mt-4 text-gray-700">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {/* Boarding School Support */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
        >
          <Link href="/bscs-support">
            <div className="relative h-60 w-full cursor-pointer">
              <Image
                src="/images/boarding-support.png"
                alt="Boarding School Support"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="bg-black text-white text-center py-3 font-bold text-xl">
            ボーディングスクール留学のサポート内容
            <br />
            （1年以上の長期留学）
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <ul className="text-sm text-gray-700 mb-6 list-inside list-disc">
              <li>✓ 個別カウンセリング</li>
              <li>✓ 学校選定アドバイス</li>
              <li>✓ 出願戦略の立案</li>
              <li>✓ スケジュール管理</li>
              <li>✓ 必要書類の準備</li>
              <li>✓ 出願書類の添削</li>
              <li>✓ 願書提出サポート</li>
              <li>✓ 面接練習</li>
              <li>✓ 保護者への報告</li>
              <li>✓ 合格後の手続き支援</li>
            </ul>
            <div className="mt-4">
              <Link href="/bscs-support">
                <div className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition">
                  詳細を見る
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Summer School Program Support */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
        >
          <Link href="/bscs-support">
            <div className="relative h-60 w-full cursor-pointer">
              <Image
                src="/images/summer-support.png"
                alt="Summer School Program Support"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="bg-black text-white text-center py-3 font-bold text-xl">
            サマースクールプログラムのサポート内容
            <br />
            （2〜5週間の短期留学）
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <ul className="text-sm text-gray-700 mb-6 list-inside list-disc">
              <li>✓ プログラム選定アドバイス</li>
              <li>✓ 応募書類の準備と提出サポート</li>
              <li>✓ 英語力確認・事前課題サポート</li>
              <li>✓ 現地スタッフとの連携</li>
              <li>✓ 出発前の生活オリエンテーション</li>
              <li>✓ 渡航前後のサポート</li>
              <li>✓ 緊急時対応</li>
              <li>✓ 保護者への報告</li>
            </ul>
            <div className="mt-4">
              <Link href="/bscs-support">
                <div className="inline-block bg-yellow-100 text-yellow-900 py-2 px-4 rounded shadow hover:bg-yellow-200 transition">
                  詳細を見る
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportSection;
