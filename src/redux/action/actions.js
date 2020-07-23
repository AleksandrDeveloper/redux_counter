import { ADD_COUNTER_ONE, SUB_COUNTER_ONE,ADD_COUNTER_TWO,SUB_COUNTER_TWO } from "./actionType";



 
// counter 1
export function addCounterOne(){
    return {
        type: ADD_COUNTER_ONE
    }
}
export function subCounterOne(){
    return {
        type: SUB_COUNTER_ONE
    }
}

//counter 2
export function addCounterTwo(num){
    return {
        type: ADD_COUNTER_TWO,
        payload:num
    }
}   
export function subCounterTwo(num){
    return {
        type: SUB_COUNTER_TWO,
        payload:num
    }
}