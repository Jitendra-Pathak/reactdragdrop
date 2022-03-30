// @remove-file-on-eject
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree..
 */
"use strict";

module.exports = path => {
  const config = {
    bail: false,
    collectCoverageFrom: [
      "<rootDir>/component/**/*.{js,jsx,ts,tsx}",],
    coverageDirectory: "<rootDir>/coverage-report",
    collectCoverage: true,
    coverageReporters: ["html", "cobertura"],
    testMatch: ["<rootDir>/**/*.test.{js,jsx,ts,tsx}"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
      "node_modules/"
    ]
  };

  return config;
};
