export function generateFavicon() {
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="12" fill="#ffffff"/>
      <text x="32" y="42" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#333333">M</text>
      <text x="44" y="42" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#f97316">J</text>
    </svg>
  `

  const encodedSvg = encodeURIComponent(svgContent)
  const dataUri = `data:image/svg+xml,${encodedSvg}`

  return dataUri
}
