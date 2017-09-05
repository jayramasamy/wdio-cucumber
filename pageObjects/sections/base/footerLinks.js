import { config } from '../../../wdio.conf';

const footerLinks = {
  // footer elements
  myAccount: ".footer-list-item a[href*='account']",
  myGroceryOrders: ".footer-list-item a[href*='orders']",
  help: ".footer-list-item a[href*='help']",

  // methods
  select: (linkName) => {
    return browser.click(linkName);
  }

};

export default footerLinks;
