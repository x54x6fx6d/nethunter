import styles from "../styles/blog.module.css";
import type { AppProps } from 'next/app'
import { test } from "./api/test";

function Blog({ Component, pageProps }: AppProps) {
  return <div className={styles.wrapper}>
    <input type="text" required></input>
    <button className={styles.button} onClick={() => {
      var tst = new test("tommy");
      tst.testFunc();
    }}></button>
  </div>
}

export default Blog