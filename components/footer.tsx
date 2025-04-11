import { Logo } from "./logo"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bsc-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Logo isFooter={true} />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-bsc-gold transition-colors duration-300">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  スタッフ紹介
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">留学プログラム</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="hover:text-bsc-gold transition-colors duration-300">
                  ボーディングスクール留学
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-bsc-gold transition-colors duration-300">
                  サマースクールプログラム
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  短期留学プログラム
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  大学進学サポート
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">サポート</h4>
            <ul className="space-y-2">
              <li>
                <a href="#support" className="hover:text-bsc-gold transition-colors duration-300">
                  出願前サポート
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-bsc-gold transition-colors duration-300">
                  留学中サポート
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-bsc-gold transition-colors duration-300">
                  進路サポート
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bsc-gold transition-colors duration-300">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>〒123-4567</li>
              <li>東京都渋谷区○○町1-2-3</li>
              <li>TEL: 03-1234-5678</li>
              <li>Email: info@boardingschool.jp</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-white/60 border-t border-white/20 pt-6">
          <p>© {new Date().getFullYear()} Boarding School Consulting Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
