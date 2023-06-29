import styles from "./index.module.scss";
import EasterEgg from "./EasterEgg";

export default function Footer() {
  return (
    <footer className={styles.Container}>
      <div>
        <p>♬ Currently not listening to anything</p>
        <p style={{ display: "flex", gap: 8 }}>
          <EasterEgg />
          <span className={styles.Vercel}>Powered by ▲Vercel</span>
        </p>
      </div>
    </footer>
  );
}
