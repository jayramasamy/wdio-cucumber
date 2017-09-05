import { config } from '../wdio.conf';
import {defineSupportCode} from 'cucumber';

import chai from 'chai';
import { expect } from 'chai';

let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
let options = {defaultWait: 5000} // 5000ms
chai.use(chaiWebdriver(browser, options));


import {readJsonFile,readYamlFile,readUserData,readCountryConfigData} from "../lib/helper";
//import HomePage from '../pageObjects/pages/base/homePage';
import HomePage from '../pageObjects/pages/desktop/homePage';

//var fileName = '../pageObjects/page                                                            s/'+process.env.VIEWPORT+'/homePage';

//console.log(process.env.VIEWPORT);
//console.log(fileName);

//import HomePage from fileName;


//enviroment data from environments_url.yaml
const envData = readCountryConfigData(process.env.ENVIRONMENT,process.env.COUNTRY, null, null)
config.base_url = envData.base_url;

// start of step defs
const searchSteps = defineSupportCode(function ({Given, When, Then, And}) {

  Given('I am on the home page', function () {
    //console.log("homepage....", HomePage);
    return HomePage.open()
   })

   When('I search for cola', function () {
        return HomePage.search('cola')
    })

    Then('I should see search results', function () {
         expect(".product-lists").to.be.visible()
     })
});

export {searchSteps};
