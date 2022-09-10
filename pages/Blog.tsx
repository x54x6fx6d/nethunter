import styles from "../styles/blog.module.css";
import type { AppProps } from 'next/app'

function Blog({ Component, pageProps }: AppProps) {
  return <div className={styles.wrapper}>
    <button className={styles.button} onClick={() => {
    }}></button>
  </div>
}

export default Blog