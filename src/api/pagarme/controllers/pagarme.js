'use strict';

  module.exports = {
    async createLink(ctx, next) {
      // console.log('strapi.services ', strapi.services);
      // console.log('pagar-me', strapi.service('api::pagarme.pagarme'));
      //console.log(ctx.request.body)
      try {
        const data = await strapi
          .service("api::pagarme.pagarme")
          .createLink(ctx.request.body.data);
          console.log(data, "data");
        ctx.body = data;
        
      } catch (err) {
        ctx.badRequest("pagarme.createLink controller error", { moreDetails: err });
      }
    },
  };

