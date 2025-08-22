import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BackButtonProps {
  href: string
  text?: string
}

export function BackButton({ href, text = "Volver al inicio" }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
      <ArrowLeft className="h-4 w-4 mr-2" />
      {text}
    </Link>
  )
}
