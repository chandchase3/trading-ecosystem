import { useSelector } from "react-redux";
import { panelRegistry } from "../panels/panelRegistry";
import KrakenStreamManager from "../../providers/kraken/KrakenStreamManager";

export default function MidTopLayout() {

  const window = useSelector(
    (state) => state.workspace.windowLayouts.midTop
  );

  const tab = window.tabs[window.activeTab];

  const Panel = panelRegistry[tab.viewType];

  return (
    <>
      <KrakenStreamManager />
      <Panel {...tab.data} />
    </>
  );
}