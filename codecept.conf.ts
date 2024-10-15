exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://todomvc.com/examples/react/dist',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './test/*_test.ts',
  name: 'automation'
}