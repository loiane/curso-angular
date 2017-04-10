import { FormsPage } from './app.po';

describe('forms App', () => {
  let page: FormsPage;

  beforeEach(() => {
    page = new FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
