module.exports = {
  '/api/content/*': {
    'target': 'https://www.naranja.com',
    "secure": false,
    "changeOrigin": true,   // esto le indica que es externo, no necesita rewrite
    "logLevel": "debug"
  }
};
