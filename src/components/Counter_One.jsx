import React from "react";
import { connect } from "react-redux";
import { addCounterOne, subCounterOne } from "../redux/action/actions";

function Counter_One(props) {
  const {theme,plusCounter,minusCounter,count} = props;
  return (
    <div className="counter_one d-flex justify-content-between border border-info my-3 p-2 align-items-center">
      <h3>
        <strong className={theme ? "text-light" : "text-dark"}>{count}</strong>
      </h3>

      <div className="butons">
        <button type="button" className="btn btn-success mr-3" onClick={plusCounter}>
          Plus
        </button>
        <button type="button" className="btn btn-danger" onClick={minusCounter}>
          Minus
        </button>
      </div>
    </div>
  );
}


const mapStateToProps = (state)=>{
  console.log('Counter_One------',state);
  return{
      count:state.counter_one.counter_one
  }
}
const mapDispatchToProps = (dispatch)=>{   
  return{
      plusCounter: ()=> dispatch(addCounterOne()),
      minusCounter:()=> dispatch(subCounterOne()),
  }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Counter_One);
  