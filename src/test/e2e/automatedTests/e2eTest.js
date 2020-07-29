// const constants = require('./helpers/constants.js');
// const TestInitialize = require('./helpers/test-initialize.js')
// const HomePage = require('./pageObjects/home.js')
// var webdriver = require('selenium-webdriver');
// const {suite} = require('selenium-webdriver/testing');
// var By = webdriver.By;
// var driver;

// // function test1(){
// //   TestInitialize.launchWebsite();
// //   //HomePage.renderTheChallenge();
// // }

// suite(function(env) {
//   describe('Test initialize', function() {
//     let driver;

//     before(async function() {
//       driver = await env.builder().build();
//     });

//     after(() => driver.quit());

//     it('Launch website', async function() {
//       await driver.get('localhost:3000');

//       // let q = await driver.findElement(By.id('q'));
//       // await q.sendKeys('webdriver', Key.RETURN);
//       // await driver.wait(
//       //     until.titleIs('webdriver - Google Search'), 1000);
//     });
//   });
// });

