import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20 font-spaceGrotesk">
                7
              </div>
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
                BigSweetDream
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Australia's premier licensed lottery platform. Join thousands of winners and start your lottery journey
              today.
            </p>
            <div className="flex items-center mb-4 bg-yellow-900/30 p-3 rounded-lg border border-yellow-700 w-fit">
              <AlertTriangle className="text-yellow-500 mr-3" size={20} />
              <span className="text-yellow-500 font-bold">18+ Only - Play Responsibly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-montserrat">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lotteries" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                  Lotteries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Support Organizations */}
      <div className="w-full bg-gray-900/50 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-white mb-6 text-center font-montserrat">Support Organizations</h3>
          <div className="flex justify-center flex-wrap gap-8">
            <Link
              href="https://gamblershelp.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform "
              title="Gambler's Help Victoria"
            >
              <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                <img
                  src="/gamblershelp.svg"
                  alt="Gambler's Help Victoria"
                  className="object-contain"
                  width={96}
                  height={96}
                />
              </div>
            </Link>
            <Link
              href="https://www.vic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
              title="Government Victoria"
            >
              <div className="w-18 h-18 relative rounded-lg overflow-hidden bg-white p-2">
                <img
                  src="/victoria.svg"
                  alt="Government Victoria"
                  className="object-contain"
                  width={96}
                  height={96}
                />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
              title="GamCare"
            >
              <div className="w-18 h-18 relative rounded-lg overflow-hidden bg-white p-2">
                <img
                  src="/gamecare.svg"
                  alt="GamCare"
                  className="object-contain"
                  width={96}
                  height={96}
                />
              </div>
            </Link>
            <Link
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
              title="BeGambleAware"
            >
              <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                <img
                  src="/bgambleaware.svg"
                  alt="BeGambleAware"
                  className="object-contain"
                  width={140}
                  height={180}
                />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform"
              title="BeGambleAware"
            >
              <div className="w-18 h-18 relative rounded-lg overflow-hidden bg-white p-2">
                <img
                  src="/gamble.webp"
                  alt="GambleAware"
                  className="object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Full Width Bottom Section */}
      <div className="w-full bg-black/80 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BigSweetDream. All rights reserved. Licensed lottery operator in
              Australia.
            </p>
            <div className="text-gray-400 text-sm">
              <span className="font-spaceGrotesk">Secure • Licensed • Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
