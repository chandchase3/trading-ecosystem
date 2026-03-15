import { useSelector } from "react-redux";
import { panelRegistry } from "../windows/panels/panelRegistry";

export default function MiddleWindowLayoutBottom() {

  const window = useSelector(
    (state) => state.workspace.windowLayouts.midBottom
  );

  const tab = window.tabs[window.activeTab];

  const Panel = panelRegistry[tab.viewType];

  return <Panel {...tab.data} />;
}