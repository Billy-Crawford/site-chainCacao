"use client"

import { motion } from "framer-motion"

const nodes = ["Agriculteur", "Coopérative", "Exportateur", "Vérification"]

export default function BlockchainDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {nodes.map((node, index) => (
        <div key={index} className="flex items-center">

          {/* Node */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-secondary text-black px-4 py-2 rounded-lg font-medium"
          >
            {node}
          </motion.div>

          {/* Ligne */}
          {index < nodes.length - 1 && (
            <div className="hidden md:block w-16 h-[2px] bg-white/30 mx-2" />
          )}
        </div>
      ))}

    </div>
  )
}

