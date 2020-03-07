import { createStore, combineReducers, compose } from "redux";
// import thunk from "redux-thunk";

// Reducers
import getAllPost from "./reducer/postReducer";
import getJsonView from "./reducer/jsonReducer";

const initialState = {};
// const middleware = { thunk };
const reducers = combineReducers({
  post: getAllPost,
  jhome: getJsonView
});

const store = createStore(
  reducers,
  initialState,
  compose(
    // applyMiddleware(...Object.values(middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
