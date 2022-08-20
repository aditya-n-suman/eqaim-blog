import Head from 'next/head'
import Home from '../src/components/organisms/Home'
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eqaim Blog</title>
        <meta name="description" content="Blogging site powered by Eqaim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}
