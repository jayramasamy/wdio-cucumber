exports.config = {
    specs: [
        './features/*.feature'
    ],
    maxInstances: 10,
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // Saves a screenshot to a given path if a   command fails.
    screenshotPath: 'reports/screenshots',
    // If you only want to run your tests until a specific amount of t                              ests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //

    services: ['selenium-standalone'],

    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    baseUrl: 'https://www.tesco.com/groceries/en-GB',
    waitforTimeout: 60000,
    reporters: ['spec','dot', 'allure'],
    reporterOptions: {
        //
        // If you are using the "xunit" reporter you should define the directory where
        // WebdriverIO should save all unit reports.
        outputDir: './reports',
        allure: {
        outputDir: './allure-reports/allure/'
    }
    },
    framework: 'cucumber',
    cucumberOpts: {
      require: ['./step-definitions/allSteps.js' ],
      compiler: ['js:babel-core/register'],
      ignoreUndefinedDefinitions: false },
      //
      // =====
      // Hooks
      // =====
      // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
      // it and to build services around it. You can either apply a single function or an array of
      // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
      // resolved to continue.
      //
      /**
       * Gets executed once before all workers get launched.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
      onPrepare: function (config, capabilities) {
      },
      /**
       * Gets executed just before initialising the webdriver session and test framework. It allows you
       * to manipulate configurations depending on the capability or spec.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that are to be run
       */
      beforeSession: function (config, capabilities, specs) {
      },
      /**
       * Gets executed before test execution begins. At this point you can access to all global
       * variables like `browser`. It is the perfect place to define custom commands.
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that are to be run
       */
      before: function (capabilities, specs) {
      },
      /**
       * Hook that gets executed before the suite starts
       * @param {Object} suite suite details
       */
      beforeSuite: function (suite) {
      },
      /**
       * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
       * beforeEach in Mocha)
       */
      beforeHook: function () {
      },
      /**
       * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
       * afterEach in Mocha)
       */
      afterHook: function () {
      },
      /**
       * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
       * @param {Object} test test details
       */
      beforeTest: function (test) {
      },
      //
      /**
       * Runs before a WebdriverIO command gets executed.
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       */
      beforeCommand: function (commandName, args) {
      },
      /**
       * Runs after a WebdriverIO command gets executed
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       * @param {Number} result 0 - command success, 1 - command error
       * @param {Object} error error object if any
       */
      afterCommand: function (commandName, args, result, error) {
      },
      /**
       * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
       * @param {Object} test test details
       */
      afterTest: function (test) {
      },
      /**
       * Hook that gets executed after the suite has ended
       * @param {Object} suite suite details
       */
      afterSuite: function (suite) {
      },
      /**
       * Gets executed after all tests are done. You still have access to all global variables from
       * the test.
       * @param {Number} result 0 - test pass, 1 - test fail
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
      after: function (result, capabilities, specs) {
      },
      /**
       * Gets executed right after terminating the webdriver session.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
      afterSession: function (config, capabilities, specs) {
      },
      /**
       * Gets executed after all workers got shut down and the process is about to exit.
       * @param {Object} exitCode 0 - success, 1 - fail
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
      onComplete: function (exitCode, config, capabilities) {
      },
      //
      // Cucumber specific hooks
      beforeFeature: function (feature) {
      },
      beforeScenario: function (scenario) {
      },
      beforeStep: function (step) {
      },
      afterStep: function (stepResult) {
      },
      afterScenario: function (scenario) {
      },
      afterFeature: function (feature) {
      }

   };
