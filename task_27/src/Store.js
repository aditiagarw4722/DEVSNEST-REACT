import TodoReducer from "./reducers/todoReducer";
import { createStore } from "redux";

const store = createStore(TodoReducer);

export default store;