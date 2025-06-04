"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Ball {
  id: number
  number: number
  x: number
  y: number
  color: string
}

export default function LotteryBallAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [balls, setBalls] = useState<Ball[]>([])

  const colors = [
    "from-red-500 to-red-600",
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-yellow-500 to-yellow-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-cyan-500 to-cyan-600",
  ]

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize balls
    const initialBalls: Ball[] = []
    for (let i = 1; i <= 45; i++) {
      initialBalls.push({
        id: i,
        number: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setBalls(initialBalls)
  }, [])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative h-64 md:h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
      >
        {/* Spinning Drum */}
        <motion.div
          className="absolute inset-4 bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 rounded-full border-4 border-gray-600 shadow-inner"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Drum pattern */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full">
            <div className="absolute inset-4 border-2 border-dashed border-gray-500 rounded-full opacity-50"></div>
          </div>
        </motion.div>

        {/* Falling Balls */}
        {balls.map((ball) => (
          <motion.div
            key={ball.id}
            className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${ball.color} flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20`}
            initial={{
              x: "45%",
              y: "-10%",
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              x: `${20 + Math.random() * 60}%`,
              y: "110%",
              scale: 1,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: ball.id * 0.3,
              ease: "easeIn",
            }}
          >
            {ball.number}
          </motion.div>
        ))}

        {/* Drum opening */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-900 rounded-b-full border-x-2 border-b-2 border-gray-600"></div>
      </div>
    </div>
  )
}
