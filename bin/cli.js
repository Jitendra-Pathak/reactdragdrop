#!/usr/bin/env node

"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});
// Ensure environment variables are read.
const jest = require("jest");
let argv = process.argv.slice(2);


const createJestConfig = require("../config/jest/createJestConfig");
const jestConfig = createJestConfig(__dirname);
argv.push("--config", JSON.stringify(jestConfig));
jest.run(argv);
