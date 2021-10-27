/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/react",
  testRunner: "jest",
  reporters: ["progress", "clear-text", "html", "dashboard", "json"],
  coverageAnalysis: "perTest",
  jest: {
    projectType: "create-react-app",
  },
  dashboard: {
    project: "github.com/qunabu/js-testing-types",
    //version: "main",
    //module: "my-module",
    baseUrl: "https://dashboard.stryker-mutator.io/api/reports",
    reportType: "full",
  },
};
