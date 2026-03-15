import { createSlice } from '@reduxjs/toolkit';
import { defaultTabs } from './panels/defaultPanels/defaultTabs';

/*
TAB FACTORY
*/
function createTab(windowId, tabId, templateName = "Default") {

  const template = defaultTabs[templateName];

  return {
    id: tabId,
    windowId,

    name: template.name,
    viewType: template.viewType,

    ui: {
      tabColor: template.tabColor,
      icon: template.icon
    },

    theme: {
      background: "#111",
      text: "#fff"
    },

    data: { ...template.data },

    meta: {
      createdAt: Date.now(),
      pinned: false,
      closable: true
    }
  };
}

/*
WINDOW FACTORY
*/
function createWindow(windowId, defaultTabId, template="Default") {

  return {

    id: windowId,

    activeTab: defaultTabId,

    tabOrder: [defaultTabId],

    meta: {
      theme: "dark",
      accentColor: "#4f46e5",
      locked: false,
      allowNewTabs: true
    },

    tabs: {
      [defaultTabId]: createTab(windowId, defaultTabId, template)
    }
  };
}

const initialState = {

  topNav: { visible: true, height: 50 },
  bottomNav: { visible: true, height: 50 },

  leftPanel: {
    config: { type: "split", feature: "scanner", widgets: [] },
    visible: true,
    width: 200,
    minWidth: 48,
    maxWidth: 1700,
  },

  rightPanel: {
    config: { type: "split", feature: "watchlist", widgets: [] },
    visible: true,
    width: 200,
    minWidth: 48,
    maxWidth: 1700,
  },

  windowLayouts: {

    leftTop: createWindow("leftTop", "default-1a", "Scanner"),
    leftBottom: createWindow("leftBottom", "default-1b", "Notes"),

    midTop: createWindow("midTop", "default-2a", "Chart"),
    midBottom: createWindow("midBottom", "default-2b", "Scanner"),

    rightTop: createWindow("rightTop", "default-3a", "Watchlist"),
    rightBottom: createWindow("rightBottom", "default-3b", "Alerts"),

  },

  bottomWindowViewData: {

    midView: {
      visible: true,
      overlay: true,
      height: 200,
      minHeight: 25,
      maxHeight: 3000,
    },

    leftView: {
      visible: true,
      overlay: true,
      height: 200,
      minHeight: 25,
      maxHeight: 3000,
    },

    rightView: {
      visible: true,
      overlay: true,
      height: 200,
      minHeight: 25,
      maxHeight: 3000,
    },

  }

};

const workspaceSlice = createSlice({

  name: 'workspace',

  initialState,

  reducers: {

    toggleLeftPanel(state) {
      state.leftPanel.visible = !state.leftPanel.visible;
    },

    toggleRightPanel(state) {
      state.rightPanel.visible = !state.rightPanel.visible;
    },

    setLeftPanelWidth(state, action) {

      const w = action.payload;

      state.leftPanel.width = Math.max(
        state.leftPanel.minWidth,
        Math.min(w, state.leftPanel.maxWidth)
      );
    },

    setRightPanelWidth(state, action) {

      const w = action.payload;

      state.rightPanel.width = Math.max(
        state.rightPanel.minWidth,
        Math.min(w, state.rightPanel.maxWidth)
      );
    },

    setMidBottomWindowHeight(state, action) {

      const view = state.bottomWindowViewData.midView;
      const h = action.payload;

      view.height = Math.max(
        view.minHeight,
        Math.min(h, view.maxHeight)
      );
    },

    toggleMidBottomWindowVisible(state) {
      state.bottomWindowViewData.midView.visible =
        !state.bottomWindowViewData.midView.visible;
    },

    setLeftBottomWindowHeight(state, action) {

      const view = state.bottomWindowViewData.leftView;
      const h = action.payload;

      view.height = Math.max(
        view.minHeight,
        Math.min(h, view.maxHeight)
      );
    },

    toggleLeftBottomWindowVisible(state) {
      state.bottomWindowViewData.leftView.visible =
        !state.bottomWindowViewData.leftView.visible;
    },

    setRightBottomWindowHeight(state, action) {

      const view = state.bottomWindowViewData.rightView;
      const h = action.payload;

      view.height = Math.max(
        view.minHeight,
        Math.min(h, view.maxHeight)
      );
    },

    toggleRightBottomWindowVisible(state) {
      state.bottomWindowViewData.rightView.visible =
        !state.bottomWindowViewData.rightView.visible;
    }

  }

});

export const {
  toggleLeftPanel,
  toggleRightPanel,
  setLeftPanelWidth,
  setRightPanelWidth,
  setMidBottomWindowHeight,
  toggleMidBottomWindowVisible,
  setLeftBottomWindowHeight,
  toggleLeftBottomWindowVisible,
  setRightBottomWindowHeight,
  toggleRightBottomWindowVisible
} = workspaceSlice.actions;

export default workspaceSlice.reducer;