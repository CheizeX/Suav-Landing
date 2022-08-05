import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum IActiveTabsProps {
  STYLIST = 'Stylist',
  STYLES = 'Styles',
  SESSIONS = 'Sessions',
}
interface SelectedTabInterface {
  activeTabInState: string;
}

const initialState: SelectedTabInterface = {
  activeTabInState: 'Stylist',
};

export const activeTabInState = createSlice({
  name: 'activeTabInState',
  initialState,
  reducers: {
    setUiActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTabInState = action.payload;
    },
  },
});

export const { setUiActiveTab } = activeTabInState.actions;
export default activeTabInState.reducer;
