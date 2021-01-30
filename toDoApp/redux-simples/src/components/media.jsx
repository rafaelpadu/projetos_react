/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./interval.css";
import Card from "./card";
import { connect } from "react-redux";
const Media = (props) => {
  const { min, max } = props;
  return (
    <Card blue title="Média de Números">
      <div className="interval">
        <span>
          <span>Média: </span>
          <strong>{(max + min) / 2}</strong>
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
