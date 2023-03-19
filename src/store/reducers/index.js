import { combineReducers } from "redux";
import color from "./themeReducer";
const rootReducer = combineReducers({
  color,
});
export default rootReducer;
