import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
