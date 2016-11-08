import { 05ServicosPage } from './app.po';

describe('-05-servicos App', function() {
  let page: 05ServicosPage;

  beforeEach(() => {
    page = new 05ServicosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
