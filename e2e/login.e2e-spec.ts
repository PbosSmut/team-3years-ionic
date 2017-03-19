import { browser, element, by } from 'protractor';

describe('Login e2e', () => {

  beforeEach(() => {
    browser.get('http://localhost:8100/');
  });

  it('the login page is displayed by default', () => {
    expect(element(by.css('ion-title'))
      .getAttribute('innerHTML'))
      .toContain('Crowddash');
  });

  it('the login button on the login page is displayed', () => {
    let btnLogin = element(by.className('btnLogin'));
    expect(btnLogin.isPresent()).toBe(true);
  });

  it('click on the login button should result in a login popup', function () {
    let btnLogin = element(by.className('btnLogin'));
    btnLogin.click();

    let auth0Modal = element(by.className('auth0-lock-container'));
    expect(auth0Modal.isPresent()).toBe(true);
  });

  it('the login modal should have a facebook login button', function () {
    let btnLogin = element(by.className('btnLogin'));
    btnLogin.click();

    let fb = element(by.buttonText("Log in with Facebook"));
    expect(fb.isPresent()).toBe(true);
  });

  it('the login modal should have a Google login button', function () {
    let btnLogin = element(by.className('btnLogin'));
    btnLogin.click();

    let google = element(by.buttonText("Log in with Google"));
    expect(google.isPresent()).toBe(true);
  });

  it('it should be able to login with a account via e-mail', function () {
    let login = new Login;
    login.password.sendKeys("testje");
    login.username.sendKeys("vhsiebe@gmail.com");
    login.loginbtn.click();
    browser.sleep(1000);

    expect(element(by.css('ion-title'))
      .getAttribute('innerHTML'))
      .toContain('All Projects');
  });
});


let Login = function () {
  let btnLogin = element(by.className('btnLogin'));
  btnLogin.click();
  browser.sleep(1000);

  this.password = element(by.name("password"));
  this.username = element(by.name("username"));
  this.loginbtn = element(by.className("auth0-lock-submit"));
};
module.exports = Login;
