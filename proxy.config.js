const proxy = [
  {
    context: ['https://github.com/pablozagnoli/'],
    target: 'https://pablozagnoli.github.io/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
