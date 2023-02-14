import type { NextApiRequest, NextApiResponse } from "next"
import { ImageResponse } from "@vercel/og"

import OGImage from "@/components/OGImage"

export const config = {
  runtime: "edge",
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Stephen Vondenstein"

    return new ImageResponse(<OGImage>{title}</OGImage>, {
      width: 1200,
      height: 628,
    })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
