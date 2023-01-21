import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/auth/authSlice"
const reducer = combineReducers({
  auth: authReducer,
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(
  reducer,
  
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
