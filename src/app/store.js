import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import ticketReducer from "../features/ticket/ticketSlice";

export default configureStore({
  reducer: {
    ticket: ticketReducer,
  },
  middleware: [...getDefaultMiddleware(), save()],
  preloadedState: load()
});
