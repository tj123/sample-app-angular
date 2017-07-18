import { browser, element, by } from 'protractor';

export class SampleAppNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    //noinspection TypeScriptUnresolvedFunction
    return element(by.css('app-root h1')).getText();
  }
}
