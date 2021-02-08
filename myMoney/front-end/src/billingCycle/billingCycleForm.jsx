import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import labelAndInput from '../commom/form/labelAndInput'
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import {init} from './billingCycleActions'
import './billingCustom.css'
import ItemList from './itemList'
import Summary from './summary'
class BillingCycleForm extends Component {
  calculateSummary(){
    const sum = (t,v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum,0),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum,0) 
    }
  }
  render() {
    const {handleSubmit, readOnly, credits, debts} = this.props
    const {sumOfCredits, sumOfDebts}= this.calculateSummary()
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div id="formBox">
          <div className="dataInput">
            <Field name="name" readOnly={readOnly} component={labelAndInput} label='Nome' xs={12} sm={4} placeHolder='Informe o nome'/>
            <Field name="month" readOnly={readOnly} component={labelAndInput} label='Mês' xs={12} sm={4} placeHolder='Informe o mês' type='number' />
            <Field name="year" readOnly={readOnly} component={labelAndInput} label="Ano" xs={12} sm={4} placeHolder="Informe o ano" type='number' />
          </div>
          <div className="dashBoardForm">
            <Summary debt={sumOfDebts} credit={sumOfCredits}/>
          </div>
          <div className="creditInput">
            <ItemList xs={12} sm={6} list={credits} readOnly2={readOnly} field="credits" legend="Créditos"/>
            <ItemList xs={12} sm={6} list={debts} readOnly2={readOnly} field="debts" legend="Débitos" showStatus={true}/>
          </div>
        </div>
        <div className="formButtons">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            >
            {this.props.buttonName}
          </Button>
          <Button type='button' variant="contained" color="secondary" onClick={this.props.init}>Cancelar</Button>
        </div>
      </form>
    );
  }
}

BillingCycleForm =  reduxForm({form: 'billingCycleForm'})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
