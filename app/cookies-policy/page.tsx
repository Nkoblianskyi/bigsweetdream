"use client"

import { motion } from "framer-motion"

export default function CookiesPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
          Cookies Policy
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6"></div>
        <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
      </motion.div>

      <div className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-2xl border border-purple-800/30 backdrop-blur-sm">
        <div className="prose prose-invert max-w-none">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and to provide information to
                website owners.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To remember your login information and preferences</li>
                <li>To analyze how you use our website and improve our services</li>
                <li>To provide personalized content and advertisements</li>
                <li>To ensure the security of your account and transactions</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <div className="text-gray-300 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited
                  most often and if they get error messages from web pages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal
                  features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Targeting Cookies</h3>
                <p>These cookies are used to deliver advertisements more relevant to you and your interests.</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking cookies can
                impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p>Most web browsers allow you to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>We may use third-party services that place cookies on your device. These services include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Advertising networks for targeted advertisements</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-gray-300 space-y-4">
              <p>If you have any questions about our use of cookies, please contact us at:</p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p>Email: privacy@bigsweetdream.com</p>
                <p>Phone: 1800 LOTTERY</p>
                <p>Address: Sydney, NSW, Australia</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
