import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from "./api/assets/lotusTransparent.png"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NetHunter</title>
      </Head>
      <div className={styles.logoWrapper}
        style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            left: "25px",
        }}
        >
        <Image className={styles.logo}
        src={logo}
        width={100}
        height={100}
        />
        </div>
        <div className={styles.navbar}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Home
