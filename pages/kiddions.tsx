import styles from "../styles/shopItems/kiddions.module.css";
import type { AppProps } from 'next/app';
import Image from 'next/image';

function kiddions({Component, pageProps}: AppProps) {
    return <div className={styles.wrapper}>
        <p>Test</p>
    </div>
}

export default kiddions;