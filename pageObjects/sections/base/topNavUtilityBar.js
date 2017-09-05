import { config } from '../../../wdio.conf';

class TopNavUtilityBar {

  get elements() {
    return ({
      register: 'a.utility-header__register',
      signin: 'a.utility-header__login',
      help: 'a.utility-header__help',
      feedback: '.utility-header__feedback a',
      logoutButton: 'button.utility-header__logout-button'
    });
  }

open() {
    return browser.url(config.base_url);
}
search(searchTerm) {
    return browser
        .setValue(this.elements.searchInputBox,searchTerm)
        .click(this.elements.searchGoButton);
}

}
export default TopNavUtilityBar;
