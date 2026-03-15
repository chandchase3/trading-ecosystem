import styles from "./index.module.css";
import MidLayout from "../../content/MidLayout";

export default function MidCol() {
  return (
    <div className={styles.mainColumn}>
      <MidLayout />
    </div>
  );
}