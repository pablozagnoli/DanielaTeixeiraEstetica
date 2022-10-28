const proxy = [
  {
    context: '/api',
    target: 'https://pablozagnoli.github.io/DanielaTeixeiraEstetica/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
