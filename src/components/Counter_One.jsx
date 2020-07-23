import React from "react";
import { connect } from "react-redux";
import { addCounterOne, subCounterOne } from "../redux/action/actions";
import { bindActionCreators } from "redux";

function CounterOne(props) {
  const {theme,addCounterOne,subCounterOne,count} = props;
  console.log(props);
  
  return (
    <div className="counter_one d-flex justify-content-between border border-info my-3 p-2 align-items-center">
      <h3>
        <strong className={theme ? "text-light" : "text-dark"}>{count}</strong>
      </h3>

      <div className="butons">
        <button type="button" className="btn btn-success mr-3" onClick={addCounterOne}>
          Plus
        </button>
        <button type="button" className="btn btn-danger" onClick={subCounterOne}>
          Minus
        </button>
      </div>
    </div>
  );
}


const mapStateToProps = (state)=>{
  return{
      count:state.counter_one.counter_one
  }
}
// const mapDispatchToProps = (dispatch)=>{   
//   return{
//       plusCounter: ()=> dispatch(addCounterOne()),
//       minusCounter:()=> dispatch(subCounterOne()),
//   }
// } 
const mapDispatchToProps = dispatch=> bindActionCreators({addCounterOne,subCounterOne},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CounterOne);
  