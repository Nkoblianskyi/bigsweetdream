import { Montserrat, Poppins, Space_Grotesk } from "next/font/google"

// Main heading font - for large titles and hero sections
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

// Body font - for most text content
export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

// Accent font - for numbers, special elements, and buttons
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})
