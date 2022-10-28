const proxy = [
  {
    context: ['/api'],
    target: 'https://pablozagnoli.github.io/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
