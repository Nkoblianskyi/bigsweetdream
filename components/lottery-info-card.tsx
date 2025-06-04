"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LotteryInfoCardProps {
  title: string
  description: string
  drawDay: string
  jackpot: string
  imageUrl: string
  delay?: number
}

export default function LotteryInfoCard({
  title,
  description,
  drawDay,
  jackpot,
  imageUrl,
  delay = 0,
}: LotteryInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      <div className="relative z-20 p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Draw Day</p>
              <p className="text-white font-medium">{drawDay}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Jackpot</p>
              <p className="text-green-400 font-bold">{jackpot}</p>
            </div>
          </div>
          <Link href="/login">
            <Button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white">
              Buy Ticket
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
