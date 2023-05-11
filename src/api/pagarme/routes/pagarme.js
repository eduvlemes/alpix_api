module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/pagarme',
     handler: 'pagarme.createLink',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
