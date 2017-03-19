import { browser, element, by, ElementFinder } from 'protractor';

describe('Login e2e', () => {

  beforeEach(() => {
    browser.get('http://localhost:8100/ionic-lab');
  });

  it('the login page is displayed by default', () => {
    expect(element(by.css('ion-title'))
      .getAttribute('innerHTML'))
      .toContain('Crowddash');
  });
});
