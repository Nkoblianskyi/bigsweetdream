"use client"

import { motion } from "framer-motion"

export default function LotteriesPage() {
  return (
    <div className="py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
          Australian Lotteries
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the exciting world of Australian lotteries. From weekly draws to special events, find your perfect
          game and start winning today.
        </p>
      </motion.div>

      {/* General Lottery Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              How Lotteries Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Understanding the fundamentals of lottery games, from number selection to prize distribution and
              everything in between.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Number Selection</h3>
              <p className="text-gray-300">
                Players choose numbers from a predetermined range. Some games require selecting main numbers plus bonus
                numbers. Quick pick options allow random selection for convenience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Draw Process</h3>
              <p className="text-gray-300">
                Draws are conducted using certified random number generators or mechanical ball machines. All draws are
                supervised by independent auditors to ensure fairness and transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prize Structure</h3>
              <p className="text-gray-300">
                Most lotteries feature multiple prize divisions. The more numbers you match, the higher your prize.
                Jackpots roll over when not won, creating larger prizes for future draws.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                  <path d="M15 7h6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Odds & Probability</h3>
              <p className="text-gray-300">
                Each lottery game has different odds based on the number range and format. While jackpot odds are low,
                smaller prizes offer much better chances of winning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security & Fairness</h3>
              <p className="text-gray-300">
                Modern lotteries use advanced security measures including encrypted ticket systems, secure draw
                environments, and independent verification to ensure complete fairness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mb-4 text-white">
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
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Benefits</h3>
              <p className="text-gray-300">
                Lottery proceeds support various community programs including healthcare, education, sports facilities,
                and cultural initiatives, benefiting society as a whole.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lottery Types */}
      <section className="py-16 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Types of Lottery Games
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Different lottery formats offer various ways to play and win, each with unique characteristics and prize
              structures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Traditional Number Draw</h3>
              <p className="text-gray-300 mb-4">
                The classic lottery format where players select numbers from a predetermined range. Winners are
                determined by matching drawn numbers in exact order or any order, depending on the game rules.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Choose numbers from a specific range (e.g., 1-45)</li>
                <li>• Multiple prize divisions based on matches</li>
                <li>• Regular weekly or bi-weekly draws</li>
                <li>• Jackpots that roll over when not won</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Bonus Ball Style</h3>
              <p className="text-gray-300 mb-4">
                Enhanced lottery format featuring main numbers plus a special bonus number drawn from a separate pool.
                This format typically offers larger jackpots and more prize divisions.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Main numbers plus bonus ball system</li>
                <li>• Larger jackpots due to lower odds</li>
                <li>• Multiple ways to win across divisions</li>
                <li>• Special bonus number increases prizes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Instant Win Games</h3>
              <p className="text-gray-300 mb-4">
                Scratch-off style games where results are determined immediately upon purchase. These games offer
                instant gratification with various themes and prize structures.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Immediate results upon ticket purchase</li>
                <li>• Various themes and gameplay styles</li>
                <li>• Fixed odds and predetermined prizes</li>
                <li>• Multiple price points available</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-xl border border-purple-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Daily Draw Games</h3>
              <p className="text-gray-300 mb-4">
                Frequent draw games with smaller number pools, offering better odds but smaller prizes. These games
                provide regular opportunities to win with daily or multiple daily draws.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Daily or multiple daily draws</li>
                <li>• Smaller number pools for better odds</li>
                <li>• Consistent prize amounts</li>
                <li>• Quick and simple gameplay</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Playing Responsibly */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Playing Responsibly
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Lottery games should be enjoyed as entertainment. Understanding responsible gaming practices ensures a
              positive experience for all players.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Set a Budget</h3>
              <p className="text-gray-300">
                Only spend what you can afford to lose. Set a weekly or monthly budget for lottery play and stick to it
                regardless of wins or losses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Take Breaks</h3>
              <p className="text-gray-300">
                Regular breaks from lottery play help maintain perspective. Consider taking time off if you find
                yourself playing more than intended.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Seek Support</h3>
              <p className="text-gray-300">
                If gambling becomes a problem, help is available. Contact support organizations for confidential
                assistance and resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lottery History */}
      <section className="py-16 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              History of Lotteries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Lotteries have a rich history spanning thousands of years, evolving from ancient fundraising methods to
              modern entertainment and community support systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">Ancient Origins</h3>
                <p className="text-gray-300">
                  The earliest recorded lotteries date back to ancient China around 200 BC, where they were used to fund
                  major government projects including the Great Wall. Ancient Romans also used lottery-style games for
                  entertainment during dinner parties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">European Development</h3>
                <p className="text-gray-300">
                  Modern lotteries emerged in 15th century Europe, with the first recorded public lottery held in
                  Belgium in 1449. These early lotteries were used to raise funds for town fortifications and to help
                  the poor.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">Australian Lotteries</h3>
                <p className="text-gray-300">
                  Australia's first official lottery was established in 1917 in New South Wales to raise funds for World
                  War I. Since then, lotteries have become an integral part of Australian culture, funding countless
                  community projects and creating thousands of millionaires.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">Digital Revolution</h3>
                <p className="text-gray-300">
                  The internet age has transformed lotteries, making them more accessible through online platforms while
                  maintaining the same security and fairness standards. Digital technology has also enabled new game
                  formats and improved player experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
