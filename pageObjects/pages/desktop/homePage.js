import { config } from '../../../wdio.conf';
import HomePage from '../base/homePage';
import FooterLinks from '../../sections/desktop/footerLinks';

//const searchInputBox = '#query';
//const searchGoButton = '#query+button.icon-search-white';
//const loginButton = '.button.button-primary';
//const registerButton = '.signin-register--register-button a';
//const welcomeMessage = '.user-greeting--name';

const homePage = Object.assign({}, HomePage, {
  //searchInputBox,
  //searchGoButton,
  //loginButton,
 //registerButton,
 //welcomeMessage,

 registerButton: '.signin-register--register-button a',
 welcomeMessage: '.user-greeting--name',

 // search: (searchTerm) => {
 //   return browser
 //       .setValue(this.searchInputBox, searchTerm)
 //       .click(this.searchGoButton);
 //  }

});

homePage.search = (searchTerm) => {
  return browser
      .setValue(homePage.searchInputBox, searchTerm)
      .click(homePage.searchGoButton);
 };

export default homePage;

//
// module.exports = {
//   // page elements
//   searchInputBox,
//   searchGoButton,
//   loginButton,
//   registerButton,
//   welcomeMessage,
//
//   // methods
//   // open: () => {
//   //   return browser.url(config.base_url);
//   // },
//
//   search: (searchTerm) => {
//     return browser
//         .setValue(searchInputBox, searchTerm)
//         .click(searchGoButton);
//    }
// };
