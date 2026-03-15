import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  topNav: { visible: true, height: 50 },
  bottomNav: { visible: true, height: 50 },

  leftPanel: {
    config: {
      type: "splt",
      feature: "scanner",
      widgets: [],
    },
    visible: true,
    width: 200,
    minWidth: 48,
    maxWidth: 1700,
  },

  rightPanel: {
    config: {
      type: "split",
      feature: "watchlist",
      widgets: [],
    },
    visible: true,
    width: 200,
    minWidth: 48,
    maxWidth: 1700,
  },

  midBottomWindow: {
    visible: true,
    overlay: true,
    height: 200,
    minHeight: 25,
    maxHeight: 3000,
  },
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    // Side panels
    toggleLeftPanel(state) { state.leftPanel.visible = !state.leftPanel.visible; },
    toggleRightPanel(state) { state.rightPanel.visible = !state.rightPanel.visible; },
    setLeftPanelWidth(state, action) {
      const w = action.payload;
      state.leftPanel.width = Math.max(state.leftPanel.minWidth, Math.min(w, state.leftPanel.maxWidth));
    },
    setRightPanelWidth(state, action) {
      const w = action.payload;
      state.rightPanel.width = Math.max(state.rightPanel.minWidth, Math.min(w, state.rightPanel.maxWidth));
    },

    // Secondary panel
    setMidBottomWindowHeight(state, action) {
      const h = action.payload;
      state.midBottomWindow.height = Math.max(state.midBottomWindow.minHeight, Math.min(h, state.midBottomWindow.maxHeight));
    },
    toggleMidBottomWindowVisible(state) {
      state.midBottomWindow.visible = !state.midBottomWindow.visible;
    },
  },
});

export const { toggleLeftPanel, toggleRightPanel, setLeftPanelWidth, setRightPanelWidth, setMidBottomWindowHeight, toggleMidBottomWindowVisible } = workspaceSlice.actions;
export default workspaceSlice.reducer;
