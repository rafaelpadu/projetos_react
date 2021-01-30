/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./interval.css";
import Card from "./card";
import { connect } from "react-redux";
const Media = (props) => {
  const { min, max } = props;
  const med = parseInt(Math.random() * (max - min) + min);
  return (
    <Card purple title="Sorteio de Números">
      <div className="interval">
        <span>
          <span>Sorteio: </span>
          <strong>{med}</strong>
        </span>
      </div>
    </Card>
  );
};
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Media);
