import { config } from '../../../wdio.conf';
import FooterLinks from '../../sections/base/footerLinks';

//const searchInputBox = '#query';
//const searchGoButton = '#query+button.icon-search-white';
//const loginButton = '.button.button-primary';
//const registerButton = '.signin-register--register-button a';
//const welcomeMessage = '.user-greeting--name';

const homePage = {
  // page elements
  searchInputBox: '#query',
  searchGoButton: '#query+button.icon-search-white',
  loginButton: '.button.button-primary',
  bookSlotButton: 'div.action',
  checkoutButton: 'a.mini-trolley--checkout',
  //registerButton,
  //welcomeMessage,

  // methods
  open: () => {
    return browser.url(config.base_url);
  },
  footerLinks: FooterLinks

  // search: (searchTerm) => {
  //   return browser
  //       .setValue(searchInputBox, searchTerm)
  //       .click(searchGoButton);
  //  }
};

export default homePage;
