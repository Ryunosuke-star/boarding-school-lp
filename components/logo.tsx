import Link from "next/link"

export function Logo({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative h-20 w-32">
        <div className="absolute top-0 left-0 h-10 w-10 bg-bsc-red transform rotate-45 transition-all duration-300 group-hover:scale-110"></div>
        <div className="absolute top-5 left-5 h-10 w-10 bg-black transform rotate-45 transition-all duration-300 group-hover:scale-110"></div>
        <div className={`absolute ml-16 mt-1 ${isFooter ? "text-white" : "text-black"}`}>
          <div className="font-bold text-sm tracking-wider">BOARDING SCHOOL</div>
          <div className="font-bold text-sm tracking-wider">CONSULTING INC.</div>
        </div>
      </div>
    </Link>
  )
}
