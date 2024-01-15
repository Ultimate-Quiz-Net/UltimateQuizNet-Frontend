import { configureStore } from "@reduxjs/toolkit";
import debatesBoardSlice from "../modules/debatesBoardSlice";

const store = configureStore({
  reducer: { debatesBoardSlice: debatesBoardSlice },
});

export default store;
