const express = require('express')

module.exports = function(server){
    //Definir url base para todas as rotas
    const router = express.Router();
    server.use('/api', router)

    //Rotas de ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleServices');
    BillingCycle.register(router, '/billingCycles')
}