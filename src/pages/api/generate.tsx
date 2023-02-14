import type { NextApiRequest, NextApiResponse } from "next"
import { ImageResponse } from "@vercel/og"

import OGImage from "@/components/OGImage"

export const config = {
  runtime: "edge",
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new ImageResponse(<OGImage>Hello world!</OGImage>, {
    width: 1200,
    height: 628,
  })
}
