/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => (
  <input
    {...props.input}
    className="form-control"
    placeholder={props.placeHolder}
    readOnly={props.readOnly}
    type={props.type}
  ></input>
);

