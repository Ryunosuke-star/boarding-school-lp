"use client"

const Footer = () => {
  return (
    <footer className="bg-bsc-dark text-white py-10 text-sm">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">会社情報</h4>
          <ul className="space-y-2">
            <li>ボーディングスクールコンサルティング株式会社</li>
            <li>〒103-0004 東京都中央区東日本橋一丁目5番6号</li>
            <li>03-6555-1642</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">留学プログラム</h4>
          <ul className="space-y-2">
            <li>ボーディングスクール留学</li>
            <li>サマースクールプログラム</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">サポート</h4>
          <ul className="space-y-2">
            <li>ボーディングスクール留学サポート</li>
            <li>サマースクールプログラムサポート</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">お問い合わせ</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@boardingschool.jp" className="hover:underline">
                info@boardingschool.jp
              </a>
            </li>
            <li>
              <a href="https://boardingschool.jp/contact/" className="hover:underline">
                お問い合わせフォーム
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-bsc-light">
        &copy; {new Date().getFullYear()} ボーディングスクールコンサルティング株式会社. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
