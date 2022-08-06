module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          components: './src/components',
          // model: './src/model',
          routes: './src/routes',
          store: './src/store',
          assets: './src/assets',
          // constant: './src/constant',
          utils: './src/utils',
          // theme: './src/theme',
          service: './src/service',
          // context: './src/context'
        },
      },
    ],
  ],
};
