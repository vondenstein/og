import Head from "next/head"
import Image from "next/image"
import { Rosario } from "@next/font/google"

import styles from "@/styles/Page.module.css"

const rosario = Rosario({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Graph Images · Stephen Vondenstein</title>
        <meta
          name="description"
          content="Oops, you accessed a page we didn't think you'd find."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#111111" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            src="/500.svg"
            alt="A cartoon astronaut floating away from his ship."
            width={420}
            height={377}
            priority
            className={styles.image}
          />
          <h1 className={rosario.className}>Oops!</h1>
          <p className={styles.description}>
            You accessed a page we didn&apos;t think you&apos;d find.
          </p>
          <a href="https://vondenstein.com">
            <div className={styles.button}>Main site</div>
          </a>
        </div>
      </main>
    </>
  )
}
