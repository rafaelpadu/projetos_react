import React from 'react'
import '../dashboard/dashboard.css'
import ContentHeader from '../commom/template/contentHeader'
import Tabelas from '../commom/tab/tabs'

import CycleList from './billingCycleList';
import CycleForm from './billingCycleForm'

import {create, remove, update, init} from './billingCycleActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const BillingCycles = () => {
    const dispatch = useDispatch();
    const header = useSelector(state => state.header)
    function componentWillMount(){
        dispatch(init())
    }
    componentWillMount()
    return (
        <div className={header.open ? "dashBoardOpen" : "dashBoardClosed"}>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
            <Tabelas 
            lista={<CycleList/>}
            formAdd={<CycleForm onSubmit={dispatch(create)} buttonName="Incluir"/>}
            formUpdate={<CycleForm onSubmit={dispatch(update)} buttonName="Alterar"/>}
            formDelete={<CycleForm onSubmit={dispatch(remove)} readOnly={true} buttonName="Excluir"/>}
            /> 
        </div>
    )
}

export default BillingCycles