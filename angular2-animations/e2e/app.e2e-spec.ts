import { Angular2AnimationsPage } from './app.po';

describe('angular2-animations App', () => {
  let page: Angular2AnimationsPage;

  beforeEach(() => {
    page = new Angular2AnimationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
