"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 p-4 z-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
            <Link href="/cookies-policy" className="text-cyan-400 underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
            onClick={() => setShowConsent(false)}
          >
            Decline
          </Button>
          <Button
            className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
            onClick={handleAccept}
          >
            Accept All
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
