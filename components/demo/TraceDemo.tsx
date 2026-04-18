"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Step = {
  actor: string
  action: string
  location: string
}

const steps: Step[] = [
  { actor: "Agriculteur", action: "Récolte du cacao", location: "Kpalimé" },
  { actor: "Coopérative", action: "Collecte et stockage", location: "Atakpamé" },
  { actor: "Exportateur", action: "Préparation export", location: "Lomé" },
  { actor: "Vérificateur", action: "Validation EUDR", location: "UE" },
]

function generateHash() {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

export default function TraceDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [hashes, setHashes] = useState<string[]>([])

  const nextStep = () => {
    if (currentStep < steps.length) {
      setHashes((prev) => [...prev, generateHash()])
      setCurrentStep((prev) => prev + 1)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setHashes([])
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-8">

      {/* Timeline */}
      <div className="relative border-l border-secondary pl-6 space-y-8 mb-8">

        {steps.slice(0, currentStep).map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Point */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-secondary rounded-full"></div>

            {/* Card */}
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <p className="text-secondary font-semibold">
                {step.actor}
              </p>

              <p className="text-gray-300 text-sm">
                {step.action}
              </p>

              <p className="text-gray-500 text-xs">
                📍 {step.location}
              </p>

              <p className="text-green-400 text-xs mt-2 font-mono">
                🔗 Hash: {hashes[index]}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={nextStep}
          className="bg-secondary text-black px-6 py-2 rounded-lg hover:opacity-80 transition"
        >
          Étape suivante
        </button>

        <button
          onClick={reset}
          className="border border-white/20 px-6 py-2 rounded-lg hover:bg-white/10 transition"
        >
          Reset
        </button>
      </div>

    </div>
  )
}

