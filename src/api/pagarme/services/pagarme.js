'use strict';
const axios = require('axios');
module.exports = {
    createLink : async (body) => {
        //console.log(body)
        try {
            let PAGARMEAPIKEY = process.env.PAGARMEAPIKEY
            let pagarmePaymentLink = false
            //console.log(PAGARMEAPIKEY)
            await axios.post(`https://api.pagar.me/1/payment_links/?api_key=${PAGARMEAPIKEY}`,body)
            .then(response => {
                //console.log(response)
                pagarmePaymentLink = response.data.url
            })
            //console.log('entendi foi nada')
            if(pagarmePaymentLink){
                return {data:pagarmePaymentLink}
            }
            return []
        } catch (err) {
          return err;
        }
    },
}
