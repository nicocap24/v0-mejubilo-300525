"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  className?: string
}

export default function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => toggleItem(index)}
            className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-500 transition-transform duration-200",
                openIndex === index ? "transform rotate-180" : "",
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-96" : "max-h-0",
            )}
          >
            <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
