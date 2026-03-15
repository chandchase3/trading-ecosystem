import DefaultPanel from "./DefaultPanel";
import ScannerPanel from "./ScannerPanel";
import WatchlistPanel from "./WatchlistPanel";
import ChartPanel from "./ChartPanel";
import NotesPanel from "./NotesPanel";
import AlertsPanel from "./AlertsPanel";

export const panelRegistry = {
  default: DefaultPanel,
  scanner: ScannerPanel,
  watchlist: WatchlistPanel,
  chart: ChartPanel,
  notes: NotesPanel,
  alerts: AlertsPanel
};