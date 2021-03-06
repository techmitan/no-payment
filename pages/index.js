import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website Down</title>
        <meta name="description" content="Please make payment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">shree paras group</a>
        </h1>

        <p className={styles.description}>
          Building large infrastructure requires time and effort.
          <br />
          <code className={styles.code}>building good websites is no exception!</code>
        </p>


      </main>


    </div>
  )
}
