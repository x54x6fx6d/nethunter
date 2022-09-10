import styles from "../styles/blog.module.css";
import type { AppProps } from 'next/app'
import Image from "next/image";

import logo from "./api/assets/lotusTransparent.png";

function Blog({ Component, pageProps }: AppProps) {
  return <div className={styles.wrapper}>
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
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
  </div>
}

export default Blog