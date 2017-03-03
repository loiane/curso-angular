import { DiretivasPage } from './app.po';

describe('diretivas App', () => {
  let page: DiretivasPage;

  beforeEach(() => {
    page = new DiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
