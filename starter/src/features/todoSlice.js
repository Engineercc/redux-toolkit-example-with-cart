// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import todosFile from "./../initialTodos";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },

    remove: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },

    updateItem: (state, action) => {
      const itemId = action.payload.id; // obje göndereceğimiz için direk action.payload yerine action.payload.id yazdık.
      state.map((item) => {
        if (item.id === itemId) {
          return { ...item, title: action.payload.title };
        }
      });
    },

    completedItem: (state, action) => {
      const itemId = action.payload;
      return state.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, completedItem, updateItem } = todoSlice.actions;
