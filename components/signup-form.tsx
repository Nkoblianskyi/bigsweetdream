"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { AlertCircle, Check } from "lucide-react"
import Link from "next/link"

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [step, setStep] = useState(1)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    const requiredFields = ["title", "firstName", "lastName", "zip", "location", "dateOfBirth"]

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      }
    })

    if (!agreeTerms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep2()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {showSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Registration Successful!</h2>
          <p className="text-gray-300 mb-4">Your account has been created. You will be redirected to the login page.</p>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white">
              Go to Login
            </Button>
          </Link>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
          <p className="text-center text-gray-400 mb-6">
            Join thousands of winners and start your lottery journey today
          </p>

          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div className={`h-1 flex-1 ${step === 1 ? "bg-pink-500" : "bg-green-500"} rounded-full`}></div>
              <div className={`h-1 flex-1 ml-2 ${step === 2 ? "bg-pink-500" : "bg-gray-700"} rounded-full`}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-400">Account</span>
              <span className="text-sm text-gray-400">Personal Details</span>
            </div>
          </div>

          {step === 1 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
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
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
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
                type="button"
                onClick={handleNextStep}
                className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
              >
                Continue
              </Button>

              <div className="text-center text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-cyan-400 hover:underline">
                  Log In
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Select value={formData.title} onValueChange={(value) => handleSelectChange("title", value)}>
                    <SelectTrigger className={errors.title ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select title" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">Mr.</SelectItem>
                      <SelectItem value="mrs">Mrs.</SelectItem>
                      <SelectItem value="ms">Ms.</SelectItem>
                      <SelectItem value="dr">Dr.</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.title && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.title}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.firstName}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.lastName}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthName">Birth name</Label>
                  <Input
                    id="birthName"
                    name="birthName"
                    placeholder="Birth name (if different)"
                    value={formData.birthName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip">Zip *</Label>
                  <Input
                    id="zip"
                    name="zip"
                    placeholder="Postal code"
                    value={formData.zip}
                    onChange={handleChange}
                    className={errors.zip ? "border-red-500" : ""}
                  />
                  {errors.zip && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.zip}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="City/Location"
                    value={formData.location}
                    onChange={handleChange}
                    className={errors.location ? "border-red-500" : ""}
                  />
                  {errors.location && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.location}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="street">Street *</Label>
                  <Input
                    id="street"
                    name="street"
                    placeholder="Street address"
                    value={formData.street}
                    onChange={handleChange}
                    className={errors.street ? "border-red-500" : ""}
                  />
                  {errors.street && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.street}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="houseNumber">House number *</Label>
                  <Input
                    id="houseNumber"
                    name="houseNumber"
                    placeholder="House number"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className={errors.houseNumber ? "border-red-500" : ""}
                  />
                  {errors.houseNumber && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.houseNumber}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of birth *</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={errors.dateOfBirth ? "border-red-500" : ""}
                  />
                  {errors.dateOfBirth && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.dateOfBirth}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="placeOfBirth">Place of birth *</Label>
                  <Input
                    id="placeOfBirth"
                    name="placeOfBirth"
                    placeholder="Place of birth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    className={errors.placeOfBirth ? "border-red-500" : ""}
                  />
                  {errors.placeOfBirth && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.placeOfBirth}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+XX X XXXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="iban">IBAN *</Label>
                  <Input
                    id="iban"
                    name="iban"
                    placeholder="Enter your IBAN"
                    value={formData.iban}
                    onChange={handleChange}
                    className={errors.iban ? "border-red-500" : ""}
                  />
                  {errors.iban && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.iban}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                  I agree with the{" "}
                  <Link href="/privacy-policy" className="text-cyan-400 hover:underline">
                    policies
                  </Link>{" "}
                  of bigsweetdream.com and data processing for my inquiry
                </label>
              </div>
              {errors.terms && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <AlertCircle size={12} className="mr-1" />
                  {errors.terms}
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </Button>
              </div>
            </div>
          )}
        </motion.form>
      )}
    </div>
  )
}
