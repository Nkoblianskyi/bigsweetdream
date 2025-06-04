"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
          About BigSweetDream
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your trusted partner in Australian lottery gaming, providing secure, transparent, and exciting lottery
          experiences since our establishment.
        </p>
      </motion.div>

      {/* Company Story */}
      <section className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              BigSweetDream was founded with a simple mission: to make lottery gaming accessible, secure, and enjoyable
              for everyone in Australia. As a fully licensed lottery operator, we pride ourselves on transparency,
              fairness, and exceptional customer service.
            </p>
            <p>
              Our platform combines cutting-edge technology with traditional lottery excitement, offering players a
              modern way to participate in Australia's favorite lottery games. We provide access to all major Australian
              lottery formats with secure and reliable service.
            </p>
            <p>
              With thousands of satisfied customers and millions in prizes awarded, we continue to grow as
              Australia&apos;s premier online lottery destination.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h3 className="text-xl font-bold text-white mb-2">Trust & Security</h3>
            <p className="text-gray-300">
              Your security is our priority. We use advanced encryption and secure payment systems to protect your data
              and transactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
            <p className="text-gray-300">
              Complete transparency in all our operations. From draw results to prize distributions, everything is open
              and verifiable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Customer First</h3>
            <p className="text-gray-300">
              Our customers are at the heart of everything we do. We provide 24/7 support and ensure every player has
              the best experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licensing & Compliance */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-2xl border border-purple-800/30 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            Licensed & Regulated
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Official Licensing</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                BigSweetDream operates under a full Australian lottery license, ensuring all our operations meet the
                highest standards of integrity and fairness.
              </p>
              <p>
                We are regularly audited by independent authorities to maintain our licensing and ensure compliance with
                all Australian gambling regulations.
              </p>
              <p>
                Our license covers all major Australian lottery games, giving you confidence that every ticket purchase
                and prize payout is legitimate and secure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Responsible Gaming</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                We are committed to promoting responsible gaming and providing tools to help players maintain control
                over their lottery activities.
              </p>
              <p>
                Our platform includes spending limits, self-exclusion options, and links to professional gambling
                support services.
              </p>
              <p>
                We work closely with organizations like Gambler&apos;s Help Victoria and GamCare to ensure player
                welfare is always our priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Our Team */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            About Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300 mb-2">50+ Professionals</p>
            <p className="text-sm text-gray-400">Dedicated lottery specialists</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h3 className="text-xl font-bold text-white mb-2">Years of Experience</h3>
            <p className="text-gray-300 mb-2">15+ Years</p>
            <p className="text-sm text-gray-400">Industry leadership</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Office Location</h3>
            <p className="text-gray-300 mb-2">Melbourne, VIC</p>
            <p className="text-sm text-gray-400">Australia</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
