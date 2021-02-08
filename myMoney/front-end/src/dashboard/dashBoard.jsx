import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getSummary} from './dashBoardActions'

import './dashboard.css'
import ContentHeader from './../commom/template/contentHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';


class DashBoard extends Component {
  componentWillMount(){
    this.props.getSummary()
  }
  render() {
    const {credit, debt} = this.props.summary;

    return (
      <div className="dashBoard">
          <ContentHeader title="Dashboard" small="Versão 1.0"/>
          <Grid container spacing={2} direction={'row'}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={8} className='paper' id='green'>
                <div className="paperText">
                  <h3>{`R$${credit}`}</h3>
                  <p>Total de Créditos</p>
                </div>
                <Icon id='banco' className='fa fa-university'  fontSize='large' />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={8} className='paper ' id='red'>
                <div className="paperText">
                  <h3>{`R$${debt}`}</h3>
                  <p>Total de Débitos</p>
                </div>
                <Icon className="fa fa-credit-card" id='creditCard'/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={8} className='paper' id='blue'>
                <div className="paperText">
                  <h3>{`R$${credit-debt}`}</h3>
                  <p>Valor Consolidado</p>
                </div>
                <Icon className='fa fa-money' id='money'/>
              </Paper>
            </Grid>
          </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps )(DashBoard)