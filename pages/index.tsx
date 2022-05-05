import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facework</title>
        <meta name='description' content='Digital marketplace for African creatives and professionals' />
        <link rel='icon' href='/' />
      </Head>

     <Hero />
     
    </div>
  );
}

export default Home
