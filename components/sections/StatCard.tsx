"use client"

import { useEffect, useState } from "react"

type Props = {
  value: number
  label: string
  suffix?: string
}

export default function StatCard({ value, label, suffix = "" }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        start = value
        clearInterval(counter)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-secondary">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
  )
}

