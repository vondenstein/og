import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Crimson_Text, Rosario } from "@next/font/google"

const crimson = Crimson_Text({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const rosario = Rosario({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${crimson.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
