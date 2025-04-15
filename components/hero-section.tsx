"use client"

const HeroSection = () => {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center py-32 text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
          世界に羽ばたく、未来を創る。
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          ボーディングスクール留学を通じて広がる無限の可能性
        </p>
        <a
          href="#contact"
          className="bg-bsc-gold hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded transition duration-300 shadow-lg"
        >
          無料で相談してみる
        </a>
      </div>
    </section>
  )
}

export default HeroSection
