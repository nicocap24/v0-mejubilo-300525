import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "orange" | "blue" | "green"
}

export function CTASection({ title, description, buttonText, buttonHref, variant = "orange" }: CTASectionProps) {
  const bgColor = {
    orange: "bg-orange-50 border-orange-200",
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
  }[variant]

  const buttonColor = {
    orange: "bg-orange-500 hover:bg-orange-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  }[variant]

  return (
    <div className={`${bgColor} p-8 rounded-lg border text-center`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link href={buttonHref}>
        <Button className={`${buttonColor} text-white px-8 py-3`}>{buttonText}</Button>
      </Link>
    </div>
  )
}
