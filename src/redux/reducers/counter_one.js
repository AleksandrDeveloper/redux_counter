import { ADD_COUNTER_ONE, SUB_COUNTER_ONE } from "../action/actionType";

const initialState = {
    counter_one:1
}
 

export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_COUNTER_ONE:
            return {
                counter_one: state.counter_one+1
            }
        case SUB_COUNTER_ONE:
            return {
                counter_one: state.counter_one-1
            }
        default:
            return state
            break;
    }
}
