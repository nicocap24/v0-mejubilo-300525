"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface TimelineEvent {
  year: string
  title: string
  description: string
  isActive?: boolean
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    if (activeIndex < events.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      {/* Timeline line with dots */}
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        <div className="relative flex justify-between">
          {events.map((event, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                index === activeIndex
                  ? "bg-orange-500 border-4 border-orange-200 scale-125"
                  : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Ver evento de ${event.year}`}
            >
              <span className="sr-only">{event.year}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {events.map((event, index) => (
            <div
              key={index}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                index === activeIndex ? "text-orange-500 scale-110" : "text-gray-500",
              )}
              style={{ width: "8rem", textAlign: "center", transform: "translateX(-50%)", marginLeft: "1rem" }}
            >
              {event.year}
            </div>
          ))}
        </div>
      </div>

      {/* Event content */}
      <div className="relative overflow-hidden min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{events[activeIndex].title}</h3>
            <p className="text-gray-600">{events[activeIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="border-orange-200 text-orange-500 hover:bg-orange-50 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={activeIndex === events.length - 1}
          className="border-orange-200 text-orange-500 hover:bg-orange-50 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
