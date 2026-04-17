// components/sections/BlockchainStepper.tsx
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const steps = [
  {
    title: "Agriculteur",
    description: "Production et enregistrement du lot de cacao",
  },
  {
    title: "Coopérative",
    description: "Validation et regroupement des lots",
  },
  {
    title: "Exportateur",
    description: "Certification et préparation à l’export",
  },
  {
    title: "Vérification",
    description: "Contrôle conformité et traçabilité EUDR",
  },
]

export default function BlockchainStepper() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          onClick={() => setActive(index)}
          className={`cursor-pointer flex-1 p-6 rounded-xl border transition
          ${
            active === index
              ? "bg-secondary text-black border-secondary"
              : "bg-white/5 border-white/10"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <h4 className="font-bold mb-2">
            {index + 1}. {step.title}
          </h4>
          <p className="text-sm">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

