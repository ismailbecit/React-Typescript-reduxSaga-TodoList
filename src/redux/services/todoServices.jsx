import { takeEvery, put } from "redux-saga/effects";
import { todoActions } from "../futures/todoActions";
import {
  addTodo,
  deleteTodo,
  showTodo,
  updateTodo,
} from "../futures/todoSlice";
const { v4: uuidv4 } = require("uuid");

function* addTodoHandler({ data }) {
  yield put(addTodo({ id: uuidv4(), data: data }));
  console.log("services çalıştı");
}

function* showTodoHandler() {
  yield put(showTodo());
}

function* updateTodoHandler({ id, complated }) {
  console.log(complated, "complpll");
  yield put(updateTodo({ id: id, complated: complated }));
}

function* deleteTodoHandler({ id }) {
  yield put(deleteTodo(id));
}

export function* AddTodoSaga() {
  yield takeEvery(todoActions.ADD_TODO, addTodoHandler);
}

export function* ShowTodoSaga() {
  yield takeEvery(todoActions.SHOW_TODO, showTodoHandler);
}

export function* UpdateTodoSaga() {
  yield takeEvery(todoActions.UPDATE_TODO, updateTodoHandler);
}

export function* DeleteTodoSaga() {
  yield takeEvery(todoActions.DELETE_TODO, deleteTodoHandler);
}
