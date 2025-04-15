"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function SupportSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-bsc-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-center mb-6 underline underline-offset-4 decoration-red-500">
            BSC's Support
          </h2>
          <p className="text-gray-700">
            ボーディングスクールコンサルティングでは、留学前から留学中、そして卒業後まで、生徒の皆さんを全面的にサポートします。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* ボーディングスクール */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/boarding-support.png"
                alt="Boarding School Support"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#ba1b1d] bg-opacity-90 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-lg">BSC's Support</h3>
                <h2 className="text-2xl font-bold">Boarding School</h2>
              </div>
            </div>
            <div className="bg-black text-white text-center py-3 px-4">
              <p className="text-sm">ボーディングスクール留学のサポート内容</p>
              <p className="text-xs mt-1">（１年以上の長期留学）</p>
            </div>
          </motion.div>

          {/* サマースクール */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/summer-support.png"
                alt="Summer School Support"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#388593] bg-opacity-90 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-lg">BSC's Support</h3>
                <h2 className="text-2xl font-bold">Summer School Program</h2>
              </div>
            </div>
            <div className="bg-black text-white text-center py-3 px-4">
              <p className="text-sm">サマースクールプログラムのサポート内容</p>
              <p className="text-xs mt-1">（２〜５週間の短期留学）</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
