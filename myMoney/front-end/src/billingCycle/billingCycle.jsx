import React, {Component} from 'react'
import '../dashboard/dashboard.css'
import ContentHeader from '../commom/template/contentHeader'
import Tabelas from '../commom/tab/tabs'

import CycleList from './billingCycleList';
import CycleForm from './billingCycleForm'

import {create, remove, update, init} from './billingCycleActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class BillingCycles extends Component {
    componentWillMount(){
        this.props.init()
    }
    render(){
        return (
            <div className="dashBoard">
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
                <Tabelas 
                lista={<CycleList/>}
                formAdd={<CycleForm onSubmit={this.props.create} buttonName="Incluir"/>}
                formUpdate={<CycleForm onSubmit={this.props.update} buttonName="Alterar"/>}
                formDelete={<CycleForm onSubmit={this.props.remove} readOnly={true} buttonName="Excluir"/>}
                /> 
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({create, remove, update, init}, dispatch)
export default connect(null,mapDispatchToProps)(BillingCycles)