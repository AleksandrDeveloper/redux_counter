import { ADD_COUNTER_TWO, SUB_COUNTER_TWO } from "../action/actionType";

const initialState = {
    counter_two:100
}


export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_COUNTER_TWO:           
            if(action.payload){
                return {
                    counter_two: state.counter_two+action.payload
                }
            }
            return {
                counter_two: state.counter_two+20
            }
        case SUB_COUNTER_TWO:
            if(action.payload){
                return {
                    counter_two: state.counter_two-action.payload
                }
            }
            return {
                counter_two: state.counter_two-10
            }
        default:
            return state
            break;
    }
}