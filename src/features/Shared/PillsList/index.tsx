import { CSSProperties } from "react";
import styles from "./index.module.scss";

export default function PillsList({
  data,
  style,
}: {
  data: string[];
  style?: CSSProperties;
}) {
  return (
    <ul className={styles.Wrapper} style={style}>
      {data.map((pill, index) => (
        <li key={index}>{pill}</li>
      ))}
    </ul>
  );
}
