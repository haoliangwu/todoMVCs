import { Angular2HmrPage } from './app.po';

describe('angular2-hmr App', () => {
  let page: Angular2HmrPage;

  beforeEach(() => {
    page = new Angular2HmrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
