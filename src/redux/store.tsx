import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./futures/todoSlice";
import createSagaMiddleware from "redux-saga";
import {
  AddTodoSaga,
  DeleteTodoSaga,
  ShowTodoSaga,
  UpdateTodoSaga,
} from "./services/todoServices";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  middleware: [saga],
});
saga.run(ShowTodoSaga);
saga.run(AddTodoSaga);
saga.run(UpdateTodoSaga);
saga.run(DeleteTodoSaga);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
