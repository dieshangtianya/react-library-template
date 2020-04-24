module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        debug: false,
      },
    ],
    ['@babel/preset-react']
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
}

