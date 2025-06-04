"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { AlertCircle, Check } from "lucide-react"
import Link from "next/link"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/lotteries")
      }, 1500)
    }, 1000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {showSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Login Successful!</h2>
          <p className="text-gray-300">Redirecting you to lotteries...</p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Log In</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <AlertCircle size={12} className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-cyan-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <AlertCircle size={12} className="mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>
          </div>

          <div className="mt-6 text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-cyan-400 hover:underline">
              Sign up
            </Link>
          </div>
        </motion.form>
      )}
    </div>
  )
}
