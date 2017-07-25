import { Angular2FormsPage } from './app.po';

describe('angular2-forms App', () => {
  let page: Angular2FormsPage;

  beforeEach(() => {
    page = new Angular2FormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
