import { Angular2ReactFormsPage } from './app.po';

describe('angular2-react-forms App', () => {
  let page: Angular2ReactFormsPage;

  beforeEach(() => {
    page = new Angular2ReactFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
