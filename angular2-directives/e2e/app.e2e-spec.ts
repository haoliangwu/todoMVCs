import { Angular2AttrDirectivePage } from './app.po';

describe('angular2-attr-directive App', () => {
  let page: Angular2AttrDirectivePage;

  beforeEach(() => {
    page = new Angular2AttrDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
