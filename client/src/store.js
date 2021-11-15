import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import data from "./data";
import thunk from "redux-thunk";
import {
  projectCreateReducer,
  projectListReducer,
} from "./reducers/projectReducer";
const initialState = {};
const reducer = combineReducers({
  projectList: projectListReducer,
  projectCreate: projectCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
