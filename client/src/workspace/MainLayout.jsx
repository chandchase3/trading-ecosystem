import { useSelector } from 'react-redux';
import TopNav from './navbars/TopNav';
import BottomNav from './navbars/BottomNav';
import RightPanelContent from './content/RightPanelContent';
import BottomWorkspaceContent from './content/BottomWorkspaceContent';
import LeftPanelContent from './content/LeftPanelContent';
import styles from './MainLayout.module.css';
import TopWorkspaceContent from './content/TopWorkspaceContent';
import MidCol from './cols/MidCol';

export default function MainLayout() {
  const workspace = useSelector((state) => state.workspace);
  const { overlay, height: secondaryHeight, visible: secondaryVisible, dragHeight, dragging } =workspace.midBottomWindow;

  const { visible: bottomVisible, height: bottomHeight } = workspace.bottomNav;

  // says liveBottomHeight is not used, do we need it?
  const liveBottomHeight = dragging ? dragHeight : secondaryHeight;

  return (
    <div className={styles.container}>
      <TopNav />
      
      <div className={styles.body}>
        {workspace.leftPanel.visible && <LeftPanelContent panel="leftPanel" />}

        <MidCol />
        {/* <div className={styles.mainColumn}>
          <TopWorkspaceContent />
          {secondaryVisible && <BottomWorkspaceContent />}
        </div> */}

        {workspace.rightPanel.visible && <RightPanelContent />}
      </div>

      <BottomNav />
    </div>
  );
}
