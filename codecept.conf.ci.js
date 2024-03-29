const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./scenarios/*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:5000",
      show: false,
      windowSize: "1200x900",
    },
  },
  bootstrap: null,
  mocha: {},
  name: "js-testing-types",
};
