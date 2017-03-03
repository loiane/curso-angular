import { PipesPage } from './app.po';

describe('pipes App', () => {
  let page: PipesPage;

  beforeEach(() => {
    page = new PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
