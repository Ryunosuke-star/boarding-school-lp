import Image from 'next/image';
import Link from 'next/link';

const SupportSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 underline underline-offset-4 decoration-red-500">
          BSC's Support
        </h2>
        <p className="text-center text-sm mb-12">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Boarding School Box */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/boarding-support.png"
                alt="Boarding School Support"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none select-none"
              />
            </div>
            <div className="bg-black text-white text-center py-3 text-sm">
              <div className="font-bold">ボーディングスクール留学のサポート内容</div>
              <div>（１年以上の長期留学）</div>
            </div>
            <div className="p-6 text-sm">
              <ul className="space-y-2 text-gray-800">
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
              <div className="text-right mt-4">
                <Link
                  href="https://boardingschool.jp/support-boarding-school/"
                  target="_blank"
                  className="text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300 text-sm"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>

          {/* Summer School Box */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/summer-support.png"
                alt="Summer School Program Support"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none select-none"
              />
            </div>
            <div className="bg-black text-white text-center py-3 text-sm">
              <div className="font-bold">サマースクールプログラムのサポート内容</div>
              <div>（２〜５週間の短期留学）</div>
            </div>
            <div className="p-6 text-sm">
              <ul className="space-y-2 text-gray-800">
                <li>✓ プログラム選定アドバイス</li>
                <li>✓ 応募書類の準備と提出サポート</li>
                <li>✓ 英語力確認・事前課題支援</li>
                <li>✓ 現地スタッフとの連携</li>
                <li>✓ 出発前の生活オリエンテーション</li>
                <li>✓ 渡航前後のサポート</li>
                <li>✓ 緊急時対応</li>
                <li>✓ 保護者への報告</li>
              </ul>
              <div className="text-right mt-4">
                <Link
                  href="https://boardingschool.jp/support-summer-school/"
                  target="_blank"
                  className="text-bsc-gold font-bold hover:text-amber-600 transition-colors duration-300 text-sm"
                >
                  詳細を見る
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
