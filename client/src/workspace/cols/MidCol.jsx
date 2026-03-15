import { useSelector } from "react-redux";
import styles from "./MidCol.module.css";
import TopWorkspaceContent from "../content/TopWorkspaceContent";
import BottomWorkspaceContent from "../content/BottomWorkspaceContent";

export default function MidCol() {
  const workspace = useSelector((state) => state.workspace);
  const { visible: secondaryVisible } = workspace.midBottomWindow;

  return (
    <div className={styles.mainColumn}>
      <TopWorkspaceContent />
      {secondaryVisible && <BottomWorkspaceContent />}
    </div>
  );
}