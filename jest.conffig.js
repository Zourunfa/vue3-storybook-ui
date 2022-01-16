const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/components/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // 测试文件
  testMatch: ['<rootDir>/src/__tests__/**/*.spec.(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '\\.scss$': 'jest-transform-css',
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: true } }],
          '@vue/babel-preset-jsx',
          '@babel/preset-typescript',
        ],
        plugins: [
          [
            '@vue/babel-plugin-jsx',
            { mergeProps: false, enableObjectSlots: false },
          ],
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true,
            },
          ],
        ],
      },
    ],
  },
};

// module.exports = {
//   roots: ['<rootDir>/src'],
//   testMatch: [
//     '<rootDir>/src/**/__tests__/**/*.{vue,js,jsx,ts,tsx}',
//     '<rootDir>/src/**/*.{spec,test}.{vue,js,jsx,ts,tsx}',
//   ],
//   testEnvironment: 'jsdom',
//   transform: {
//     '\\.scss$': 'jest-transform-css',
//     '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
//     '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
//   },
//   transformIgnorePatterns: [
//     '<rootDir>/node_modules/',
//     '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
//     '^.+\\.module\\.(css|sass|scss|less)$',
//   ],
//   moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'json', 'node'],
//   resetMocks: true,
// };
