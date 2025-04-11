"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`w-full transition-all duration-300 ${isScrolled ? "bg-bsc-gold shadow-md" : ""}`}>
      <nav className="hidden md:flex bg-bsc-gold w-full">
        <a href="#about" className="nav-link">
          Boarding School
        </a>
        <a href="#programs" className="nav-link">
          Summer School Program
        </a>
        <a href="#support" className="nav-link">
          BSC's Support
        </a>
        <a href="#events" className="nav-link">
          Events
        </a>
        <a href="#about" className="nav-link">
          About us
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      {/* モバイルメニュー */}
      <div className="md:hidden bg-bsc-gold w-full">
        <button
          onClick={toggleMenu}
          className="w-full flex items-center justify-end p-4 text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="bg-bsc-gold w-full absolute z-50 left-0 right-0 shadow-lg animate-fade-in">
            <a
              href="#about"
              className="block py-4 px-6 text-white hover:bg-amber-600 border-b border-amber-600"
              onClick={toggleMenu}
            >
              Boarding School
            </a>
            <a
              href="#programs"
              className="block py-4 px-6 text-white hover:bg-amber-600 border-b border-amber-600"
              onClick={toggleMenu}
            >
              Summer School Program
            </a>
            <a
              href="#support"
              className="block py-4 px-6 text-white hover:bg-amber-600 border-b border-amber-600"
              onClick={toggleMenu}
            >
              BSC's Support
            </a>
            <a
              href="#events"
              className="block py-4 px-6 text-white hover:bg-amber-600 border-b border-amber-600"
              onClick={toggleMenu}
            >
              Events
            </a>
            <a
              href="#about"
              className="block py-4 px-6 text-white hover:bg-amber-600 border-b border-amber-600"
              onClick={toggleMenu}
            >
              About us
            </a>
            <a href="#contact" className="block py-4 px-6 text-white hover:bg-amber-600" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
