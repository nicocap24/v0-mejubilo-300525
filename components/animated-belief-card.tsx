"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

interface AnimatedBeliefCardProps {
  title: string
  beliefs: string[]
  type: "positive" | "negative"
}

export function AnimatedBeliefCard({ title, beliefs, type }: AnimatedBeliefCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const Icon = type === "positive" ? CheckCircle : XCircle
  const iconColor = type === "positive" ? "text-green-500" : "text-red-500"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8 h-full"
    >
      <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b border-orange-200 pb-4">{title}</h2>
      <ul className="space-y-6">
        {beliefs.map((belief, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3 cursor-pointer"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ x: 5 }}
          >
            <motion.div
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                color: hoveredIndex === index ? "#f97316" : undefined,
              }}
              className={`${iconColor} flex-shrink-0 mt-0.5`}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <motion.span
              animate={{
                fontWeight: hoveredIndex === index ? 600 : 400,
              }}
              className="text-gray-700"
            >
              {belief}
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
