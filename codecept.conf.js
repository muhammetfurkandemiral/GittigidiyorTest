exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: "maximize",
      keepCookies:"true",
      desiredCapabilities: {
        chromeOptions: {
          args: ["--disable-notifications"]
        }
      },
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    searchPage: './pages/search.js',
    cartPage: './pages/cart.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'AmazonTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}