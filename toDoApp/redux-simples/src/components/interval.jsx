import React from "react";
import "./interval.css";
import Card from "./card";
import { connect } from "react-redux";
import { changeNewMinNumber, changeNewMaxNumber } from "../store/actions/numeros";
function Interval(props) {
  const { min, max } = props;
  return (
    <Card red title="Intervalo de Números">
      <div className="interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)}></input>
        </span>
        <span>
          <strong>Maxímo:</strong>
          <input type="number" value={max} onChange={e => props.changeMax(+e.target.value)}></input>
        </span>
      </div>
    </Card>
  );
}
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeMin(newMin) {
      //action creator -> action
      dispatch(changeNewMinNumber(newMin)); //action
    },
    changeMax(newMax){
      dispatch(changeNewMaxNumber(newMax));
    }
  };
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Interval);
