import { Angular2TodoPage } from './app.po';

describe('angular2-todo App', () => {
  let page: Angular2TodoPage;

  beforeEach(() => {
    page = new Angular2TodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
