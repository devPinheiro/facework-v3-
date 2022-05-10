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
        image='https://res.cloudinary.com/appnet/image/fetch/v1634053103/https://static.sky.it/images/skytg24/it/spettacolo/cinema/2021/04/14/fast-and-furious-9-trailer/fast-furios-9_ig.jpg'
        avatar='/../public/pexels-keegan-checks-10294339.jpg'
        time={'2022-05-12 10:11:29,573'}
        description={
          "Why bother testing your JavaScript When a user encounters a bug they look like this: \n \n 🤬 Bugs grind work to a halt. Bugs cause financial harm. Every single time a bug is encountered, user trust erodes. Bugs are bad. And who gets blamed? You. The developer. You know you should squash bugs before your code is deployed. You know you need to ship code that: Takes every opportunity to guarantee that it works. Doesn't punish users with unnecessary bugs. Doesn't play whack-a-mole with features, fixing one thing only to break another UnitedMasters artist partner #Col3trane has been living the 'Lush Life' after the release of his debut project. ⁠As always, I'm super grateful to have led the DSP marketing/strategy for this release. Here are just a few highlights from the release: 💿 #1 R&B Album on iTunes UK 💿 Top 50 R&B Albums on Apple Music (#40 US)  💿 People Magazines' Emerging Artist to Watch in 2022 ⁠💿 Featured on Spotify's 'are&Be' playlist⁠ 💿 Stopping by the #TheDottyShow’s UK R&B special today, to talk 'Lush Life' and being a part of the incredible UK R&B scene on Apple Music 💿 Revealing his 5 keys to living a 'Lush Life' wit Audiomack 💿 A feature on a YouTube Music billboard⁠  💿 The cover of TIDAL's 'British Soul Invasion' playlist⁠ 💿 The cover of SoundCloud's 'Closer' playlist 💿 Takeover of Pandora 'The Prelude' station"
        }
        id={''}
        occupation={'Software Company'}
        name={'Facework Bot 🤖'}
        setModalVisibility={''}
        slug={''}
        profilePage={''}
        modalVisibility={false}
        video={''}
      />

       <PostCard
        title={'Facework v3 launch party🚀🚀🚀🚀'}
        image='https://res.cloudinary.com/appnet/image/fetch/v1634053103/https://static.sky.it/images/skytg24/it/spettacolo/cinema/2021/04/14/fast-and-furious-9-trailer/fast-furios-9_ig.jpg'
        avatar='/../public/pexels-keegan-checks-10294339.jpg'
        time={'2022-05-12 11:11:29,573'}
        description={
          "Why bother testing your JavaScript When a user encounters a bug they look like this: \n \n 🤬 Bugs grind work to a halt. Bugs cause financial harm. Every single time a bug is encountered, user trust erodes. Bugs are bad. And who gets blamed? You. The developer. You know you should squash bugs before your code is deployed. You know you need to ship code that: Takes every opportunity to guarantee that it works. Doesn't punish users with unnecessary bugs. "
        }
        id={''}
        occupation={'Software Company'}
        name={'Facework Bot 🤖'}
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
