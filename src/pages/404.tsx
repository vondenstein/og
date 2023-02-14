import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Rosario } from "@next/font/google"

import styles from "@/styles/Page.module.css"

const rosario = Rosario({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
})

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found · Stephen Vondenstein</title>
        <meta
          name="description"
          content="Sorry, there is nothing at this URL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            src="/404.svg"
            alt="A cartoon astronaut floating away from his ship."
            width={500}
            height={326}
            priority
            className={styles.image}
          />
          <h1 className={rosario.className}>Uh-oh!</h1>
          <p className={styles.description}>
            Looks like you got lost in space.
          </p>
          <Link href="/">
            <div className={styles.button}>Phone home</div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
