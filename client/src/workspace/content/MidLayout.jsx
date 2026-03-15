import { useSelector } from "react-redux";

import TopWorkspaceShell from "../cols/middle/TopWindow/TopWorkspaceShell";
import BottomWorkspaceShell from "../cols/middle/BottomWindow/BottomWorkspaceShell";

import MidTopLayout from "./MidTopLayout";
import MidBottomLayout from "./MidBottomLayout";

export default function MidLayout() {

  const { visible } = useSelector(
    (state) => state.workspace.bottomWindowViewData.midView
  );

  return (
    <>
      <TopWorkspaceShell>
        <MidTopLayout />
      </TopWorkspaceShell>

      {visible && (
        <BottomWorkspaceShell>
          <MidBottomLayout />
        </BottomWorkspaceShell>
      )}
    </>
  );
}