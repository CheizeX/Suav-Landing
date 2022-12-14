/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum IActiveTabsProps {
  STYLIST = 'Stylist',
  STYLES = 'Styles',
  SESSIONS = 'Sessions',
  NEEDSTYLIST = 'NeedStylist',
  PROVIDESERVICE = 'ProvideService',
}
interface SelectedTabInterface {
  activeTabInState: string;
}

const initialState: SelectedTabInterface = {
  activeTabInState: 'Need Stylist',
};

export const activeTabInState = createSlice({
  name: 'activeTabInState',
  initialState,
  reducers: {
    setUiActiveTab: (
      state: { activeTabInState: string },
      action: PayloadAction<string>,
    ) => {
      state.activeTabInState = action.payload;
    },
  },
});

export const { setUiActiveTab } = activeTabInState.actions;
export default activeTabInState.reducer;
