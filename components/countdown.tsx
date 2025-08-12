"use client"
import { useCountdown } from "../hooks/useCountdown"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div className="flex justify-center space-x-3 md:space-x-6">
      <div className="text-center">
        <div className="bg-white border-2 border-gray-800 text-gray-800 rounded-lg p-3 min-w-[70px] shadow-lg">
          <div className="text-xl md:text-2xl font-bold">{days.toString().padStart(2, "0")}</div>
        </div>
        <div className="text-sm text-gray-700 mt-2 font-medium">Días</div>
      </div>

      <div className="text-center">
        <div className="bg-white border-2 border-gray-800 text-gray-800 rounded-lg p-3 min-w-[70px] shadow-lg">
          <div className="text-xl md:text-2xl font-bold">{hours.toString().padStart(2, "0")}</div>
        </div>
        <div className="text-sm text-gray-700 mt-2 font-medium">Horas</div>
      </div>

      <div className="text-center">
        <div className="bg-white border-2 border-gray-800 text-gray-800 rounded-lg p-3 min-w-[70px] shadow-lg">
          <div className="text-xl md:text-2xl font-bold">{minutes.toString().padStart(2, "0")}</div>
        </div>
        <div className="text-sm text-gray-700 mt-2 font-medium">Minutos</div>
      </div>

      <div className="text-center">
        <div className="bg-white border-2 border-gray-800 text-gray-800 rounded-lg p-3 min-w-[70px] shadow-lg">
          <div className="text-xl md:text-2xl font-bold">{seconds.toString().padStart(2, "0")}</div>
        </div>
        <div className="text-sm text-gray-700 mt-2 font-medium">Segundos</div>
      </div>
    </div>
  )
}
