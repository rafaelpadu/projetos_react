import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize} from 'redux-form'
import {disableTabFalse, selectTab, disableTabtrue} from '../commom/tab/tabActions'

const BASE_URL = "http://localhost:3002/api";
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function showUpdate(billingCycle){
  return [
    selectTab('3'),
    disableTabFalse(),
    initialize('billingCycleForm', billingCycle)
  ]
}
export function showDelete(billingCycle){
  return [
    selectTab('4'),
    disableTabFalse(),
    initialize('billingCycleForm', billingCycle)
  ]
}
export function tabUpdate(){
  return [
    initialize('billingCycleForm', INITIAL_VALUES),
    disableTabtrue(),
    selectTab('2')
  ] 
}

export function init(){
  return [
    selectTab('1'),
    disableTabtrue(),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}

export function create(values) {
  return submit(values, 'post')
}
export function update(values){
  return submit(values, 'put')
}
export function remove(values){
  return submit(values, 'delete')
}
function submit(values, method){
  return (dispatch) => {
    const ID = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${ID}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação Realizada com Sucesso")
        dispatch(init())
      })
      .catch((error) => {
        error.response.data.errors.forEach((error) =>
          toastr.error("Erro", error)
        );
      });
  };
}
