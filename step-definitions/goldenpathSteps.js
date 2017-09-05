import { config } from '../wdio.conf';
import {defineSupportCode} from 'cucumber';

import chai from 'chai';
import { expect } from 'chai';

let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
let options = {defaultWait: 10000} // 5000ms
chai.use(chaiWebdriver(browser, options));


import {readJsonFile,readYamlFile,readUserData,readCountryConfigData} from "../lib/helper";
//import HomePage from '../pageObjects/pages/base/homePage';
import HomePage from '../pageObjects/pages/desktop/homePage';
//import DeliveryPage from '../pageObjects/pages/desktop/deliveryPage';
import DeliveryPage from '../pageObjects/pages/base/deliveryPageNew';


//enviroment data from environments_url.yaml
const envData = readCountryConfigData(process.env.ENVIRONMENT,process.env.COUNTRY, null, null)
config.base_url = envData.base_url;

// start of step defs
const goldenpathSteps = defineSupportCode(function ({Given, When, Then, And}) {

Given('I have booked the 1st available delivery slot', function () {
    DeliveryPage.open()
    return DeliveryPage.bookFirstAvailableSlot()
})

Given('I should see the slot details on the context card', function () {
    expect(DeliveryPage.slotContextCard).to.be.visible()
})

Given('I add the first avaialble item on search results page', function () {
   browser.waitForExist('.product-tile--title')
   var availableProducts =  browser.elements('.add-control')
   return browser.elementIdClick(availableProducts.value[0].ELEMENT)
})

Given('correct item should be added to the trolley', function () {
  browser.waitForExist('.product-tile--title');
  var items = browser.elements('.product-tile--title');
  var itemTitle = browser.elementIdText(items.value[0].ELEMENT).value;
  var trolleyItemTitle = browser.getText('.mini-tile .mini-tile__title');
  expect(trolleyItemTitle).to.equal(itemTitle);
})

Given('I checkout the order and continue to payment page', function () {
//  browser.scroll(HomePage.checkoutButton);
  browser.waitForEnabled(HomePage.checkoutButton);
//  var chkBtn = browser.element(HomePage.checkoutButton);
//  chkBtn.click();
  //browser.click(HomePage.checkoutButton);
  browser.url('checkout/review-trolley');
  browser.waitForExist("a[href*='checkout/order-summary']");
  browser.click("a[href*='checkout/order-summary']");
  browser.waitForExist("a[href*='checkout/payment-option']");
  browser.click("a[href*='checkout/payment-option']");
})

Given('I provide the valid card details to confirm the order', function () {
  browser.waitForExist('#cardName');
  browser.setValue('#cardName','Test Card');
  browser.setValue('#cardNumber','4444333322221111');
  browser.selectByValue('#expireMonth','03');
  browser.selectByValue('#expireYear','19');
  browser.setValue('#securityCode', '123');
  browser.click('.place-order-online.button');
})

Given('I should see the order confirmation page', function () {
  browser.waitForExist('.confirmation-message--thankyou-section .heading3');
  expect(browser.getUrl()).to.include('groceries/en-GB/checkout/confirmation');
})

// Given('I find the item title', function () {
//    browser.waitForExist('.product-tile--title')
//    var items = browser.elements('.product-tile--title')
//    var itemTitle = browser.elementIdText(items.value[0].ELEMENT).value;
//    console.log(itemTitle);
//   })

  Given('I am on the my orders page', function () {
    //browser.url('/orders');
    browser.click('.utility-header__orders');
    browser.waitForExist('.my-orders');
    expect(browser.getUrl()).to.include('groceries/en-GB/orders');
  })

  Given('I cancel the pending order and confirm confirmation', function () {
    browser.waitForExist("a[href*='currentModal=pendingOrderCancel']");
    browser.click("a[href*='currentModal=pendingOrderCancel']");
    browser.waitForExist('.pending-order--modal-action-cancel button');
    browser.click('.pending-order--modal-action-cancel button');
  })

Then('the order should be cancelled', function () {
  browser.waitForExist('.info-message--message',30000)
  expect(browser.getText('.info-message--message')).to.include('has been cancelled')
})

When('I navigate to the home page', function () {
  browser.url(config.base_url)
})

When('I sign out', function () {
  browser.waitForExist('.utility-header__logout-button')
  browser.click('.utility-header__logout-button')
})

Then('I am signed out', function () {
  expect(browser.isExisting('.signin-register--signin-button a')).to.equal(true)
})


});

export {goldenpathSteps};
