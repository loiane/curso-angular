import { PrimeiroProjetoPage } from './app.po';

describe('primeiro-projeto App', function() {
  let page: PrimeiroProjetoPage;

  beforeEach(() => {
    page = new PrimeiroProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
