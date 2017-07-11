import { PoliamorousJsPage } from './app.po';

describe('poliamorous-js App', () => {
  let page: PoliamorousJsPage;

  beforeEach(() => {
    page = new PoliamorousJsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
