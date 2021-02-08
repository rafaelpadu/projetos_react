import axios from 'axios';

const baseURL = 'http://localhost:3002/api'

export function getSummary (){
    const request = axios.get(`${baseURL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}