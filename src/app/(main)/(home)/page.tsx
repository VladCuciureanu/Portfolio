import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <h1 className={styles.Title}>Vlad Cuciureanu</h1>
      <p className={styles.Job}>Full Stack Developer</p>
      <div className={styles.Divider} />
    </>
  );
}
