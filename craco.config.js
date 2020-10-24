const CracoLessPlugin = require("craco-less");

module.exports = {
  // webpack: {
  //   configure: (webpackConfig, { env, paths }) => {
  //     const EXCLUDED_PLUGINS = ["ForkTsCheckerWebpackPlugin"];

  //     webpackConfig.plugins = webpackConfig.plugins.filter(
  //       (plugin) => !EXCLUDED_PLUGINS.includes(plugin.constructor.name)
  //     );

  //     return webpackConfig;
  //   },
  // },
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
