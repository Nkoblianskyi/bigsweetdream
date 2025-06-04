"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  testimonial: string
  rating: number
  winAmount?: string
  delay?: number
}

export default function TestimonialCard({
  name,
  location,
  testimonial,
  rating,
  winAmount,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{testimonial}</p>
      {winAmount && (
        <div className="mb-4 p-2 bg-green-900/20 border border-green-800/30 rounded-lg text-green-400 font-semibold">
          Won {winAmount}
        </div>
      )}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{name}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}
