import { 04DiretivasPage } from './app.po';

describe('-04-diretivas App', function() {
  let page: 04DiretivasPage;

  beforeEach(() => {
    page = new 04DiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
