import React from "react";
import { useSelector } from "react-redux";
import PanelShell from "../shells/PanelShell";

export default function LeftPanelContent() {
  const panelType = useSelector((state) => state.workspace.leftPanel.config.type);

  return (
    <PanelShell panel="leftPanel" direction="left">
      
    </PanelShell>
  );
}
