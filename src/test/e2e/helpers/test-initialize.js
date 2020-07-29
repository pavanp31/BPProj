
// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
// //var webdriver = require('selenium-webdriver');
// //const {suite} = require('selenium-webdriver/testing');
// // const Constants = require('./constants.js');
// // import { Constants } from "./constants.js";
// // var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// // export default{
// //     launchWebsite : launchWebsite,
// // };

// // function launchWebsite(){
// //     driver.get(Constants.Url);
// // }

// class BasePage {
//     constructor(){
//         global.driver = driver;
//     }

//     navigateToTheTestRoom(){
//         driver.get('http://www.thetestroom.com/webapp/');
//     }
// }
// module.exports =  BasePage;
// /*
// suite(function(env) {
//     describe('Test initialize', function() {
//       var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
  
//       before(async function() {
//         driver = await env.builder().build();
//       });
  
//       after(() => driver.quit());
  
//       it('Launch website', async function() {
//         await driver.get('localhost:3000');
  
//         // let q = await driver.findElement(By.id('q'));
//         // await q.sendKeys('webdriver', Key.RETURN);
//         // await driver.wait(
//         //     until.titleIs('webdriver - Google Search'), 1000);
//       });
//     });
//   });
 

// driver.manage().setTimeouts( { implicit: 40000 } );
// class TestInitialize {
//     constructor(){
//         global.driver = driver;
//     }

    
//     launchWebsite(){
//         driver.get('http://google.com');
//     }
// }
// */
// //module.exports =  TestInitialize;