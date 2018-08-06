import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import Reducer_Options from "./reducer_options";
const root_Reducers = combineReducers({
  form:formReducer,
  options: Reducer_Options
});
export default root_Reducers;
