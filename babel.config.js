/* eslint-disable global-require */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  plugins: [
    require('@babel/plugin-syntax-dynamic-import'),
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: false }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  ignore: ['node_modules', 'build'],
};
