import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";

const store = configureStore({
  reducer: {
    personReducer: personSlice,
  },
});

export default store;
