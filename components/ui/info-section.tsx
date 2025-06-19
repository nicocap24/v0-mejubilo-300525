import type React from "react"
interface InfoSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function InfoSection({ title, children, className = "" }: InfoSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h2>
      {children}
    </section>
  )
}
