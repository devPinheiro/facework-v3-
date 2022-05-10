import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'
import PostCard from '../components/post-card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facework</title>
        <meta
          name='description'
          content='Digital marketplace for African creatives and professionals'
        />
        <link rel='icon' href='/' />
      </Head>

      <Header />

      <PostCard
        title={'Facework v3 launch party🚀🚀🚀🚀'}
        image='/public/pexels-keegan-checks-10294339.jpg'
        avatar='/../public/pexels-keegan-checks-10294339.jpg'
        time={'06:30'}
        description={'New product design'}
        id={''}
        occupation={'Software Company'}
        name={'Facework'}
        setModalVisibility={''}
        slug={''}
        profilePage={''}
        modalVisibility={false}
        video={''}
      />
    </div>
  );
}

export default Home
