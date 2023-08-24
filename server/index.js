require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-syntax-jsx","@babel/plugin-transform-modules-commonjs"]
});

require('./server');
