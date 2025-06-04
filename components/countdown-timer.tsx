"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  className?: string
}

export default function CountdownTimer({ className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Function to calculate next Tuesday 8:30 PM AEST
    const getNextTuesday = () => {
      const now = new Date()
      const dayOfWeek = now.getDay() // 0 is Sunday, 1 is Monday, 2 is Tuesday

      // Calculate days until next Tuesday
      let daysUntilTuesday = 2 - dayOfWeek
      if (daysUntilTuesday <= 0) {
        daysUntilTuesday += 7 // If today is Tuesday or later, get next week's Tuesday
      }

      // If it's Tuesday but before 8:30 PM, use today
      if (dayOfWeek === 2) {
        const hours = now.getHours()
        const minutes = now.getMinutes()
        if (hours < 20 || (hours === 20 && minutes < 30)) {
          daysUntilTuesday = 0
        }
      }

      const nextTuesday = new Date(now)
      nextTuesday.setDate(now.getDate() + daysUntilTuesday)
      nextTuesday.setHours(20, 30, 0, 0) // 8:30 PM

      return nextTuesday
    }

    // Calculate time left
    const calculateTimeLeft = () => {
      const difference = getNextTuesday().getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // If we've passed the time, recalculate for next week
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <TimeUnit label="Days" value={formatNumber(timeLeft.days)} />
        <TimeUnit label="Hours" value={formatNumber(timeLeft.hours)} />
        <TimeUnit label="Minutes" value={formatNumber(timeLeft.minutes)} />
        <TimeUnit label="Seconds" value={formatNumber(timeLeft.seconds)} />
      </div>
    </div>
  )
}

interface TimeUnitProps {
  label: string
  value: string | number
}

function TimeUnit({ label, value }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={`${label}-${value}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold font-spaceGrotesk"
      >
        {value}
      </motion.div>
      <span className="text-xs md:text-sm text-gray-400 mt-1">{label}</span>
    </div>
  )
}
