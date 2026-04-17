// components/sections/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Container from "../shared/Container"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-dark to-black">
      <Container>
        <div className="text-center flex flex-col items-center gap-6">

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            ChainCacao — La traçabilité blockchain
            <span className="text-secondary"> au service des agriculteurs togolais</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            40 000 familles. Une chaîne. Zéro opacité.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex gap-4 mt-4"
          >
            <Link
              href="/solution"
              className="bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Découvrir la solution
            </Link>

            <Link
              href="/solution"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Voir l’architecture
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}

