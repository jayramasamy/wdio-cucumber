import { config } from '../wdio.conf';
import {defineSupportCode} from 'cucumber';

import chai from 'chai';
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var options = {defaultWait: 5000} // 5000ms
chai.use(chaiWebdriver(browser, options));
import { expect } from 'chai';


import {readJsonFile,readYamlFile,readUserData,readCountryConfigData} from "../lib/helper";
import LoginPage from '../pageObjects/pages/base/loginPage';

//enviroment data from environments_url.yaml
const envData = readCountryConfigData(process.env.ENVIRONMENT,process.env.COUNTRY, null, null)
config.base_url = envData.base_url;

//load the page object class
const loginPage = new LoginPage();

const loginSteps = defineSupportCode(function ({Given, When, Then, And}) {

  Given('I am on the grocery website', function () {
    return browser.url(envData.base_url)
   })

   Given('I go to login page', function () {
        return loginPage.open()

    })

    When('I login with valid credentials', function () {
          var userData = readUserData(process.env.COUNTRY,'user','default',null)
          console.log('login with:'+userData.email)
         return loginPage.login(userData.email, userData.password)
     })

     When('I should be logged into the grocery site', function () {
          expect(loginPage.elements.welcomeMessage).to.be.visible()
          expect(loginPage.elements.logoutButton).to.be.visible()
      })

      When('I have logged in with valid credentials', function () {
          //  browser.setViewportSize({width:1300,height:1000},false);
            browser.url(envData.base_url)
            loginPage.open()
            var userData = readUserData(process.env.COUNTRY,'user','default',null)
            console.log('login with:'+userData.email)
            return loginPage.login(userData.email, userData.password)
       })

});

export {loginSteps};
