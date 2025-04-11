import Image from "next/image"

export function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="https://sjc.microlink.io/M-HOlDd7OGNja67j2P9Y2QUQCWuPb-l6GaN-nQmDycWV8eYkS3WTKlt0vqdXuYZ_WFWzc1vjU1n3p7G39nznhw.jpeg"
        alt="Students celebrating by throwing teddy bears"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 p-10">
        <h1 className="hero-text">For the</h1>
        <h1 className="hero-text text-bsc-red">Future</h1>
      </div>
    </div>
  )
}
