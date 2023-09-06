import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import cartReducers from "../reducers/cartReducers";

const rootReducers = combineReducers({
  cartItems: cartReducers,
});
const store = createStore(rootReducers, applyMiddleware(logger));
export default store;
