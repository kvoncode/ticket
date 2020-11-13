import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from "../features/ticket/ticketSlice";

export default configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});
