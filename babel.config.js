// https://github.com/facebook/jest/issues/7579#issuecomment-457069424
module.exports =
  process.env.NODE_ENV === 'test'
    ? {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      }
    : {
        presets: ['@babel/preset-env'],
      }
