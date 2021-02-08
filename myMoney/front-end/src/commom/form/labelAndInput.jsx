/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Grid, Input, InputLabel } from "@material-ui/core";

export default (props) => (
  <Grid item xs={props.xs} sm={props.sm}>
    <div className="form-group">
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Input
        {...props.input}
        className="form-control"
        placeholder={props.placeHolder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </Grid>
);
