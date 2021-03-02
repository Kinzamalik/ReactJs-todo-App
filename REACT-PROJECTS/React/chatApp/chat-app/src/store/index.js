import reducer from "./reducer";
import { createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const strore = createStore(reducer,{},applyMiddleware(thunk)) 

export default store;