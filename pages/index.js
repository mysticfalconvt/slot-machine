import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slot Machine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://portfolio.boskind.tech/">WinBig</a>
        </h1>
        <div className={styles.container}>
          <div className={styles.slotMachineContainer}>
            a
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <p className={styles.content}>Thanks for Playing</p>
      </footer>
    </div>
  )
}
