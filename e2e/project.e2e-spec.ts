import {browser, element, by} from 'protractor';

describe('Projects e2e', () => {

  beforeAll(() => {
    browser.get('http://localhost:8100/');

    let login = new Login;
    login.password.sendKeys("testje");
    login.username.sendKeys("vhsiebe@gmail.com");
    login.loginbtn.click();
    browser.sleep(2000);
  });

  it('user should see his projects (vhsiebe has at least 1 project)', function () {
    var projects = element.all(by.className("project"));
    projects.count().then(function (amount) {
      expect(amount).toBeGreaterThan(0);
    });
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
