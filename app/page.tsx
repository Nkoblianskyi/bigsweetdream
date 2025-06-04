"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat"
            >
              Your Chance to Win Big
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Join thousands of winners in Australia's favorite lotteries. The next draw is coming soon!
            </motion.p>
          </div>

          {/* Timer Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-md rounded-3xl border border-purple-800/30 p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-montserrat">Next Oz Lotto Draw</h2>
                <motion.p
                  key={new Date().toISOString().split("T")[0]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg text-cyan-400 font-semibold font-spaceGrotesk"
                >
                  Tuesday, {(() => {
                    const now = new Date()
                    const dayOfWeek = now.getDay()
                    let daysUntilTuesday = 2 - dayOfWeek
                    if (daysUntilTuesday <= 0) {
                      daysUntilTuesday += 7
                    }
                    if (dayOfWeek === 2) {
                      const hours = now.getHours()
                      const minutes = now.getMinutes()
                      if (hours < 20 || (hours === 20 && minutes < 30)) {
                        daysUntilTuesday = 0
                      }
                    }
                    const nextTuesday = new Date(now)
                    nextTuesday.setDate(now.getDate() + daysUntilTuesday)
                    return nextTuesday.toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  })()} at 8:30 PM AEST
                </motion.p>
              </div>

              <CountdownTimer className="mb-8" />

              <div className="text-center">
                <Link href="/login">
                  <Button className="px-12 py-6 text-xl bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-spaceGrotesk">
                    Buy Ticket Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Interactive Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
            <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800">
              {/* Floating Numbers Animation */}
              <div className="h-64 md:h-80 relative bg-gradient-to-br from-gray-900 to-purple-900/50 flex items-center justify-center overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg font-spaceGrotesk"
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 300 - 150,
                      scale: 0,
                    }}
                    animate={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 300 - 150,
                      scale: [0, 1, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {Math.floor(Math.random() * 45) + 1}
                  </motion.div>
                ))}

                {/* Center Logo */}
                <motion.div
                  className="relative z-10 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-white font-bold text-lg font-spaceGrotesk">OZ</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Our Platform */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              About Our Platform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Licensed Operator</h3>
              <p className="text-gray-300">
                We are a fully licensed lottery operator in Australia, providing secure and transparent lottery
                services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Secure Platform</h3>
              <p className="text-gray-300">
                Your data and transactions are protected with the latest security measures and encryption technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Instant Winnings</h3>
              <p className="text-gray-300">
                Get your winnings instantly transferred to your account. No waiting, no hassle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lottery Information */}
      <section className="py-16 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              About Australian Lotteries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Australian lotteries offer exciting opportunities to win life-changing prizes with various game formats
              and draw schedules.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2 font-spaceGrotesk">$107M</div>
              <div className="text-gray-300">Largest Single Win</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">January 2019</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2 font-spaceGrotesk">$150M</div>
              <div className="text-gray-300">Total Paid Out</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">This Year</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2 font-spaceGrotesk">2,847</div>
              <div className="text-gray-300">Winners This Year</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">All Divisions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2 font-spaceGrotesk">52</div>
              <div className="text-gray-300">Jackpot Winners</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">All Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              Winner Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Read about our recent winners and their incredible lottery experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah M."
              location="Sydney, NSW"
              testimonial="I couldn't believe it when I won! The platform is so easy to use and the payout was instant. BigSweetDream changed my life!"
              rating={5}
              winAmount="$2.5 Million"
              delay={0.1}
            />
            <TestimonialCard
              name="Michael T."
              location="Melbourne, VIC"
              testimonial="Been playing for 6 months and finally hit the jackpot! The customer service is excellent and everything is transparent."
              rating={5}
              winAmount="$850,000"
              delay={0.2}
            />
            <TestimonialCard
              name="Emma L."
              location="Brisbane, QLD"
              testimonial="Great platform with fair odds. I've had several smaller wins that kept me motivated, and now this big win!"
              rating={5}
              winAmount="$1.2 Million"
              delay={0.3}
            />
            <TestimonialCard
              name="David R."
              location="Perth, WA"
              testimonial="The interactive features make it fun to play. Love the ball animation and the countdown timer builds excitement!"
              rating={4}
              delay={0.4}
            />
            <TestimonialCard
              name="Lisa K."
              location="Adelaide, SA"
              testimonial="Secure, reliable, and trustworthy. I feel confident playing here knowing it's a licensed operator."
              rating={5}
              delay={0.5}
            />
            <TestimonialCard
              name="James W."
              location="Hobart, TAS"
              testimonial="The mobile experience is fantastic. I can check results and buy tickets anywhere. Highly recommended!"
              rating={5}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Historical Wins */}
      <section className="py-16 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              Historical Wins
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the biggest wins in Australian lottery history and see what&apos;s possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2 font-spaceGrotesk">$107M</div>
              <div className="text-gray-300">Largest Single Win</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">January 2019</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2 font-spaceGrotesk">$150M</div>
              <div className="text-gray-300">Total Paid Out</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">This Year</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2 font-spaceGrotesk">2,847</div>
              <div className="text-gray-300">Winners This Year</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">All Divisions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-800/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2 font-spaceGrotesk">52</div>
              <div className="text-gray-300">Jackpot Winners</div>
              <div className="text-sm text-gray-400 mt-1 font-spaceGrotesk">All Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              Play Responsibly
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lottery games should be enjoyed as entertainment. We're committed to promoting responsible gaming and
              providing support when needed.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 font-spaceGrotesk">Important Reminders</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Only play with money you can afford to lose</p>
                    <p>• Set spending limits and stick to them</p>
                    <p>• Take regular breaks from playing</p>
                    <p>• Don't chase losses with bigger bets</p>
                    <p>• Remember that lottery games are based on chance</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2 font-spaceGrotesk">Set Limits</h4>
                  <p className="text-gray-400 text-sm font-spaceGrotesk">
                    Use our built-in spending limit tools to control your lottery budget
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2 font-spaceGrotesk">Take Breaks</h4>
                  <p className="text-gray-400 text-sm font-spaceGrotesk">
                    Self-exclusion options available for temporary or permanent breaks
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2 font-spaceGrotesk">Get Help</h4>
                  <p className="text-gray-400 text-sm font-spaceGrotesk">
                    Free confidential support available 24/7 from trained professionals
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-gray-800/30 rounded-lg">
                <h4 className="text-white font-semibold mb-3 text-center font-spaceGrotesk">Need Support?</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <a
                    href="https://gamblershelp.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm underline font-spaceGrotesk"
                  >
                    Gambler's Help Victoria
                  </a>
                  <a
                    href="https://www.gamcare.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm underline font-spaceGrotesk"
                  >
                    GamCare
                  </a>
                  <a
                    href="https://www.begambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm underline font-spaceGrotesk"
                  >
                    BeGambleAware
                  </a>
                  <a
                    href="https://www.vic.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm underline font-spaceGrotesk"
                  >
                    Government Victoria
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-gray-900 to-purple-900/30 p-12 rounded-2xl border border-purple-800/30 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-montserrat">
              Ready to Win Big?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-spaceGrotesk">
              Join thousands of winners and start your lottery journey today. The next jackpot could be yours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-spaceGrotesk">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/lotteries">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 font-spaceGrotesk"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
