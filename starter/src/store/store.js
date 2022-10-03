import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import todoSlice from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    modal: modalSlice,
  },
});

export default store;
