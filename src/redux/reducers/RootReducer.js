import { combineReducers } from "redux";
import configurationReducer from "./configurationReducer";
	
const RootReducer = combineReducers({
  configurationReducer,
});
	
export default RootReducer;