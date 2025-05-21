import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold">
        <span className="text-gray-600">Me</span>
        <span className="text-orange-500">Jubilo</span>
      </span>
    </Link>
  )
}
