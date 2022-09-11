import styles from "../styles/shopItems/kiddions.module.css";
import type { AppProps } from 'next/app';
import Image from 'next/image';
import kiddionsImage from "./api/assets/kiddionsImage.png";

function kiddions({Component, pageProps}: AppProps) {
    return <div className={styles.wrapper}>
        <Image
        src={kiddionsImage}
        ></Image>
    </div>
}

export default kiddions;