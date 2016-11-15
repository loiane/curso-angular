import { 06PipesPage } from './app.po';

describe('-06-pipes App', function() {
  let page: 06PipesPage;

  beforeEach(() => {
    page = new 06PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
