const CracoLessPlugin = require("craco-less");
const path = require('path');

module.exports = {
 

  webpack: {
    alias: {
      // Prevent the error of `multiple instances of React `, in case of using `npm link`
      // Hooks + multiple instances of React 
      // https://github.com/facebook/react/issues/13991
      // https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
      react: path.resolve('./node_modules/react')
    }
  },
  typescript: {
    enableTypeChecking: false /* (default value)  */,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
