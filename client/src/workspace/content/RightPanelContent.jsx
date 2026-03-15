import React from "react";
import { useSelector } from "react-redux";
import PanelShell from "../shells/PanelShell";

export default function RightPanelContent() {
  const panelType = useSelector((state) => state.workspace.rightPanel.config.type);

  return (
    <PanelShell panel="rightPanel" direction="right">
      
      {/* {panelType === "simple" && <SimplePanel />}

      {panelType === "singleFeature" && <SingleFeaturePanel panelId="rightPanel" />}

      {!["simple", "singleFeature"].includes(panelType) && <p>Noo panel type selected</p>} */}

    </PanelShell>
  );
}
