import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSummary } from "./dashBoardActions";

import "./dashboard.css";
import ContentHeader from "./../commom/template/contentHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

const DashBoard = (props) => {
  
  const summary = useSelector((state) => state.dashboard.summary);
  const header = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const { credit, debt } = summary;
  function componentWillMount(){ dispatch(getSummary())}
  componentWillMount()
  return (
    <div className={header.open ? "dashBoardOpen" : "dashBoardClosed"}>
      <ContentHeader title="Dashboard" small="Versão 1.0" />
      <Grid container spacing={2} direction={"row"}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={8} className="paper" id="green">
            <div className="paperText">
              <h3>{`R$${credit}`}</h3>
              <p>Total de Créditos</p>
            </div>
            <Icon id="banco" className="fa fa-university" fontSize="large" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={8} className="paper " id="red">
            <div className="paperText">
              <h3>{`R$${debt}`}</h3>
              <p>Total de Débitos</p>
            </div>
            <Icon className="fa fa-credit-card" id="creditCard" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={8} className="paper" id="blue">
            <div className="paperText">
              <h3>{`R$${credit - debt}`}</h3>
              <p>Valor Consolidado</p>
            </div>
            <Icon className="fa fa-money" id="money" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
