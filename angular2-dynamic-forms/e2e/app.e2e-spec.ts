import { Angular2DynamicFormsPage } from './app.po';

describe('angular2-dynamic-forms App', () => {
  let page: Angular2DynamicFormsPage;

  beforeEach(() => {
    page = new Angular2DynamicFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
