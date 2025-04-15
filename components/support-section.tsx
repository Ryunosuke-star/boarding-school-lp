import Image from 'next/image';
import Link from 'next/link';

const SupportSection = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="border-b-4 border-red-500 pb-1">BSC's Support</span>
        </h2>
        <p className="text-center mb-12">
          ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boarding School */}
          <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
            <div className="relative w-full h-48 md:h-56">
              <Image
                src="/images/boarding-support.png"
                alt="Boarding School Support"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none select-none"
              />
            </div>
            <div className="bg-black text-white text-center py-2 text-sm leading-tight">
              <div>ボーディングスクール留学のサポート内容</div>
              <div className="text-xs">（１年以上の長期留学）</div>
            </div>
            <div className="p-6 text-sm flex-1">
              <ul className="space-y-1">
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
            </div>
            <div className="px-6 pb-4 text-right">
              <Link href="/support-boarding-school/" className="text-yellow-600 hover:underline text-sm">
                詳細を見る
              </Link>
            </div>
          </div>

          {/* Summer School */}
          <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
            <div className="relative w-full h-48 md:h-56">
              <Image
                src="/images/summer-support.png"
                alt="Summer School Support"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none select-none"
              />
            </div>
            <div className="bg-black text-white text-center py-2 text-sm leading-tight">
              <div>サマースクールプログラムのサポート内容</div>
              <div className="text-xs">（２〜５週間の短期留学）</div>
            </div>
            <div className="p-6 text-sm flex-1">
              <ul className="space-y-1">
                <li>✓ プログラム選定アドバイス</li>
                <li>✓ 応募書類の準備と提出サポート</li>
                <li>✓ 英語力確認・事前課題支援</li>
                <li>✓ 現地スタッフとの連携</li>
                <li>✓ 出発前の生活オリエンテーション</li>
                <li>✓ 渡航前後のサポート</li>
                <li>✓ 緊急時対応</li>
                <li>✓ 保護者への報告</li>
              </ul>
            </div>
            <div className="px-6 pb-4 text-right">
              <Link href="/support-summer-school/" className="text-yellow-600 hover:underline text-sm">
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
