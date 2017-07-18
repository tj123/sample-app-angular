import { SampleAppNg2Page } from './app.po';

//noinspection TypeScriptUnresolvedFunction
describe('sample-app-angular App', function() {
  let page: SampleAppNg2Page;

  //noinspection TypeScriptUnresolvedFunction
  beforeEach(() => {
    page = new SampleAppNg2Page();
  });

  //noinspection TypeScriptUnresolvedFunction
  it('should display message saying app works', () => {
    page.navigateTo();
    //noinspection TypeScriptUnresolvedFunction
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
