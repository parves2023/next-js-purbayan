"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Purbayan Group", href: "/group" },
    { name: "Land Project", href: "/land-project" },
    { name: "Gallery", href: "/gallery" },
    { name: "Important", href: "/important" },
    { name: "Fishing Club", href: "/fishing-club" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/PurbayanLogo.png" // You may need to move this to /public
            alt="Purbayan City Logo"
            width={150}
            height={50}
            className="h-28 w-auto"
          />
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-yellow-500 transition-colors uppercase text-sm tracking-wider"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right-side Button */}
        <div className="hidden md:block">
          <Button className="bg-[#b78b60] hover:bg-[#9f7048] text-white px-5 uppercase font-semibold tracking-wide">
            Register Interest
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#161a1f] px-4 pb-4 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-500 transition-colors uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-[#b78b60] hover:bg-[#9f7048] text-white w-full uppercase font-semibold tracking-wide">
            Register Interest
          </Button>
        </nav>
      )}
    </header>
  )
}
