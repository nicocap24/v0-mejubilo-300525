import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || "general"
    const ageGroup = searchParams.get("ageGroup") || "30-40"
    const salaryRange = searchParams.get("salaryRange") || "500-1000"

    // In a real implementation, this would:
    // 1. Query your database for user pension data
    // 2. Apply filters based on the request parameters
    // 3. Calculate rankings and statistics
    // 4. Return the processed data

    // For demo purposes, we'll return mock data
    let data = []

    if (type === "general") {
      data = generateMockLeaderboardData(100)
    } else if (type === "age") {
      data = generateMockLeaderboardData(50, ageGroup)
    } else if (type === "salary") {
      data = generateMockLeaderboardData(50, undefined, salaryRange)
    }

    return NextResponse.json({
      success: true,
      data,
      stats: {
        averageReplacementRate: 45,
        topPerformerRate: 87,
        bottomPerformerRate: 22,
        totalUsers: data.length,
      },
    })
  } catch (error) {
    console.error("Error fetching leaderboard data:", error)
    return NextResponse.json({ error: "Error al obtener datos del ranking" }, { status: 500 })
  }
}

function generateMockLeaderboardData(count: number, ageGroup?: string, salaryRange?: string) {
  const afps = ["Capital", "Habitat", "ProVida", "Modelo", "Cuprum", "PlanVital", "Uno"]

  return Array.from({ length: count }).map((_, i) => {
    let age = Math.floor(Math.random() * 40) + 25

    // Apply age filter if specified
    if (ageGroup) {
      const [min, max] = ageGroup.split("-").map(Number)
      age = Math.floor(Math.random() * (max - min)) + min
    }

    let salary = Math.floor(Math.random() * 1500000) + 500000

    // Apply salary filter if specified
    if (salaryRange) {
      const [min, max] = salaryRange.split("-").map((s) => Number.parseInt(s) * 1000)
      salary = Math.floor(Math.random() * (max - min)) + min
    }

    const replacementRate = Math.floor(87 - i * 0.65)
    const comparisonToAverage = replacementRate - 45

    return {
      id: i + 1,
      username: `Usuario${Math.floor(Math.random() * 10000)}`,
      age,
      afp: afps[Math.floor(Math.random() * afps.length)],
      salary,
      replacementRate,
      comparisonToAverage,
      position: i + 1,
    }
  })
}
