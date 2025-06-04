import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Get title from query params
    const title = searchParams.get("title") || "Purbayan Properties Limited"

    // Get description from query params
    const description = searchParams.get("description") || "Premium real estate developer in Bangladesh"

    // Get image type from query params
    const type = searchParams.get("type") || "default"

    // Background color based on type
    let bgColor = "#1a202c"
    if (type === "project") bgColor = "#2d3748"
    if (type === "fishing") bgColor = "#2c5282"

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "white",
          background: bgColor,
          width: "100%",
          height: "100%",
          padding: 40,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            fontSize: 24,
            fontWeight: "bold",
            color: "#f8c927",
          }}
        >
          Purbayan Properties Limited
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            maxWidth: "80%",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            maxWidth: "70%",
            color: "#e2e8f0",
          }}
        >
          {description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            fontSize: 24,
            color: "#f8c927",
          }}
        >
          purbayanbd.com
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
