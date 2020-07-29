const TestInitialize = require('@/../../helpers/test-initialize.js');
const HomePage = require('@/../../pageObjects/home.page.js');

describe('Test website navigation', function () {
  it('Visit webpage', function() {
    TestInitialize.launchWebsite();
  })
})

describe('Test render challenge page', function () {
    it('Visit Render challenge page', function() {
      HomePage.renderTheChallenge();
    })
})

