import type { NextApiRequest } from "next"
import { ImageResponse } from "@vercel/og"

import PageImage from "@/components/PageImage"
import PostImage from "@/components/PostImage"
import ProfileImage from "@/components/ProfileImage"

export const config = {
  runtime: "edge",
}

const rosario = fetch(
  new URL("../../styles/fonts/rosario.ttf", import.meta.url)
).then(res => res.arrayBuffer())

const crimson = fetch(
  new URL("../../styles/fonts/crimson-text.ttf", import.meta.url)
).then(res => res.arrayBuffer())

const defaults = {
  type: "page",
  title: "Stephen Vondenstein",
  subtitle: "Software Engineer",
  image: "https://via.placeholder.com/1200x628/111111/111111.png",
}

const imageLookup: any = {
  page: PageImage,
  post: PostImage,
  profile: ProfileImage,
}

function getQueryParam(
  key: string,
  maxLength: number,
  defaultValue: string,
  searchParams: URLSearchParams
) {
  const value = searchParams.get(key)?.slice(0, maxLength)
  return value ? value : defaultValue
}

export default async function handler(req: NextApiRequest) {
  // load fonts from files
  const rosarioData = await rosario
  const crimsonData = await crimson

  // assemble fonts and image dimensions
  const params: any = {
    width: 1200,
    height: 628,
    fonts: [
      {
        name: "Rosario",
        data: rosarioData,
        weight: 700,
        style: "normal",
      },
      {
        name: "Crimson",
        data: crimsonData,
        weight: 400,
        style: "normal",
      },
    ],
  }

  try {
    const { searchParams } = new URL(req.url!)

    const type = getQueryParam("type", 100, defaults.type, searchParams)
    const title = getQueryParam("title", 100, defaults.title, searchParams)
    const subtitle = getQueryParam(
      "subtitle",
      100,
      defaults.subtitle,
      searchParams
    )
    const image = getQueryParam("image", 100, defaults.image, searchParams)

    const OGImage = imageLookup[type!]
    return new ImageResponse(
      <OGImage title={title!} subtitle={subtitle} image={image} />,
      params
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
