import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UInitialState {
  todos: [
    {
      id: number;
      content: string;
      complated: boolean;
    }
  ];
}

const initialState: UInitialState = {
  todos: [
    {
      id: 1,
      content: "Kitap Alınacak",
      complated: false,
    },
  ],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    showTodo: (state) => {
      return state;
    },
    addTodo: (state, action: PayloadAction<{ id: number; data: string }>) => {
      state.todos.push({
        id: action.payload.id,
        content: action.payload.data,
        complated: false,
      });
      console.log(state.todos);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index].complated = action.payload.complated;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, showTodo, updateTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
