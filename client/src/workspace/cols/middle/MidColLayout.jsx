import { useSelector } from "react-redux";
import styles from "./index.module.css";
import BottomWorkspaceShell from './BottomWindow/BottomWorkspaceShell';
import TopWorkspaceShell from './TopWindow/topWorkspaceShell';
import ScannerUI from '../../../view/scanner/ScannerUI';
import KrakenStreamManager from '../../../providers/kraken/KrakenStreamManager';

export default function MidCol() {
  const workspace = useSelector((state) => state.workspace);
  const { visible: secondaryVisible } = workspace.bottomWindowViewData.midView

  return (
    <div className={styles.mainColumn}>
      <TopWorkspaceShell>
        <KrakenStreamManager />
        <ScannerUI scannerName="topAltcoins" />
      </TopWorkspaceShell>

      {secondaryVisible && 
        <BottomWorkspaceShell>
          <ScannerUI scannerName="topFiveCrypto" />
        </BottomWorkspaceShell>
      }
    </div>
  );
}