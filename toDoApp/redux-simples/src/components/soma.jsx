/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./interval.css";
import Card from "./card";
import { connect } from "react-redux";

const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card green title="Soma de Números">
      <div className="interval">
        <span>
          <span>Soma: </span>
          <strong>{min + max}</strong>
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
export default connect(mapStateToProps)(Soma);
