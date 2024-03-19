module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
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
          '~': '.',
          '@screens': ['./src/screens'],
          '@api': './src/api',
          '@store': './src/store',
          '@slices': './src/store/slices',
          '@shared': './src/shared',
          '@components': './src/shared/components',
          '@type': './src/type',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
