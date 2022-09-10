import styles from "../styles/shop.module.css";
import type { AppProps } from 'next/app';
import Image from 'next/image';
import mypic from "./api/assets/lotusTransparent.png";

function shop({Component, pageProps}: AppProps){
    return <div className={styles.wrapper}>
        <div
        style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            left: "25px",
        }}
        >
        <Image className={styles.logoWrapper}
        src={mypic}
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
        <div className={styles.shopItems}>
            <div className={styles.card}>
                
            </div>
        </div>
    </div>
}

export default shop;