import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: "123f",
      title: "Cooking a salmon sushi",
      description:
        "Salmon and tuna i think is good for dinner, i wanna make it today :D",
    },
    {
      id: "234sf",
      title: "Cooking a besh",
      description: "Kek",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
      };

      state.todos.push(newTodo);
    },
    updateTask: (state, action) => {
      let test = state.todos.find((todo) => todo.id === action.payload.id);

      if (test) {
        state.todos[action.payload.index] = { ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
