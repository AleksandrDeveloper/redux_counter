import { combineReducers } from "redux";
import counter_one from './counter_one'
import counter_two from './counter_two'


export default combineReducers({
    counter_one,
    counter_two,
})