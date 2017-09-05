import { config } from '../wdio.conf';
import {defineSupportCode} from 'cucumber';

import chai from 'chai';
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var options = {defaultWait: 5000} // 5000ms
chai.use(chaiWebdriver(browser, options));
import { expect } from 'chai';


import {readJsonFile,readYamlFile,readUserData,readCountryConfigData} from "../lib/helper";
import homePage from '../pageObjects/pages/desktop/homePage';

// start of step defs
const footerSteps = defineSupportCode(function ({Given, When, Then, And}) {

    Then('I click on the my orders link on the footer', function () {
        //return browser.click(homePage.footerLinks.help);
         return homePage.footerLinks.select(homePage.footerLinks.myGroceryOrders);
         })

   Then('I should be taken to my orders page', function () {
        expect(browser.getUrl()).to.include('groceries/en-GB/orders');
    })

  Then('I should be taken to sign in page', function () {
           expect(browser.getUrl()).to.include('account/en-GB/login');
    })


});

export {footerSteps};
