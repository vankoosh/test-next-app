import Head from 'next/head'
import Front from '../components/Front'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Test</title>
        <meta name="description" content="test-next-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <Front />
        </Layout>
      </main>
    </>
  )
}
