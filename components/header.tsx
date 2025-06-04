"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20 font-spaceGrotesk"
            >
              7
            </motion.div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              BigSweetDream
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/lotteries" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Lotteries
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/login" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Log In
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-spaceGrotesk">
                Sign Up
              </Button>
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-cyan-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/lotteries"
              className="text-white hover:text-cyan-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Lotteries
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-cyan-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-cyan-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-spaceGrotesk">
                Sign Up
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
