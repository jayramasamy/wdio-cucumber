import { config } from '../../../wdio.conf';

class LoginPage {

  get elements() {
    return ({
      emailId: 'input[type=email]',
      passwordId: '#password',
      loginButton: '.ui-component__button',
      welcomeMessage: '.user-greeting--name',
      logoutButton: 'button.utility-header__logout-button'
    });
  }
// page object methods
//class LoginPage {
open() {
    return browser.url('/login/');
}
login(email, password) {
    return browser
        .setValue(this.elements.emailId,email)
        .setValue(this.elements.passwordId,password)
        .click(this.elements.loginButton);
}

}
export default LoginPage;
