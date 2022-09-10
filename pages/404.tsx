import Link from "next/link";
import styles from "../styles/404.module.css";

function viernullvier() {
    return <div className={styles.wrapper}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorReason}>Cannot reach the page you called!</p>
        <p className={styles.goBack}>Go <span className={styles.span} onClick={() => {
            history.back();
        }}>Back</span></p>
    </div>
}

export default viernullvier;