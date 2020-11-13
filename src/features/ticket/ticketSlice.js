import { createSlice } from '@reduxjs/toolkit';

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    ordinary: 0,
    golden: 0,
  },
  reducers: {
    ordinaryAdded: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ordinary += 1;
    },
    ordinarySubtracted: (state) => {
      state.ordinary -= 1;
    },
    goldenAdded: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.golden += 1;
    },
    goldenSubtracted: (state) => {
      state.golden -= 1;
    },
  },
});

export const {
  ordinaryAdded,
  ordinarySubtracted,
  goldenAdded,
  goldenSubtracted,
} = ticketSlice.actions;



export const selectOrdinary = (state) => state.ticket.ordinary;
export const selectGolden = (state) => state.ticket.golden;

export default ticketSlice.reducer;
