import styles from "../styles/shop.module.css";
import cards from "../styles/cards.module.css";
import type { AppProps } from 'next/app';
import Image from 'next/image';
import logo from "./api/assets/lotusTransparent.png";

// Config
import Price from "./api/Price";

// Card Images
import kiddions from "./api/assets/kiddions.png";
import nethunter from "./api/assets/nethunter.png";
import anubis from "./api/assets/anubis.png";

function shop({Component, pageProps}: AppProps){
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
        <div className={styles.shopWrapper}>
            <div className={cards.item}>
                <Image
                height={250}                
                src={kiddions}
                ></Image>
                <span>Kiddion Mod Menu Price: <span>{Price("kiddions")}</span></span>
            </div>
            <div className={cards.item}>
                <Image
                height={630}
                src={nethunter}
                ></Image>
                <span>NetHunter Tool Price: <span>{Price("nethunter")}</span></span>
            </div>
            <div className={cards.item}>
                <Image
                height={250}
                src={anubis}
                ></Image>
                <span>Anubis Obfuscation Tool Price: <span>{Price("anubis")}</span></span>
            </div>
        </div>
    </div>
}

export default shop;