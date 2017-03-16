import { DataBindingPage } from './app.po';

describe('data-binding App', () => {
  let page: DataBindingPage;

  beforeEach(() => {
    page = new DataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
