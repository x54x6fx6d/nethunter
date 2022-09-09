import styles from "../styles/shop.module.css";
import type { AppProps } from 'next/app'

function shop({Component, pageProps}: AppProps){
    return <div className={styles.wrapper}>
        <div className={styles.navbar}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
        <div className={styles.shopItem}>

        </div>
    </div>
}

export default shop;