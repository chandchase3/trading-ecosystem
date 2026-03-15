import { useSelector } from 'react-redux';
import TopNav from './navbars/TopNav';
import BottomNav from './navbars/BottomNav';
import RightPanelContent from './content/RightPanelContent';
import LeftPanelContent from './content/LeftPanelContent';
import styles from './MainLayout.module.css';
import MidColLayout from './cols/middle/MidColLayout';

export default function MainLayout() {
  const workspace = useSelector((state) => state.workspace);
  // const { overlay, height: secondaryHeight, visible: secondaryVisible, dragHeight, dragging } =workspace.bottomWindowViewData.midView;

  // const { visible: bottomVisible, height: bottomHeight } = workspace.bottomNav;

  // says liveBottomHeight is not used, do we need it?
  // const liveBottomHeight = dragging ? dragHeight : secondaryHeight;

  return (
    <div className={styles.container}>
      <TopNav />
      
      <div className={styles.body}>
        {workspace.leftPanel.visible && <LeftPanelContent panel="leftPanel" />}

        <MidColLayout />

        {workspace.rightPanel.visible && <RightPanelContent />}
      </div>

      <BottomNav />
    </div>
  );
}
