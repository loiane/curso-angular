import { 07RotasPage } from './app.po';

describe('-07-rotas App', function() {
  let page: 07RotasPage;

  beforeEach(() => {
    page = new 07RotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
