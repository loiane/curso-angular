import { AngularCliLibsExternasPage } from './app.po';

describe('angular-cli-libs-externas App', function() {
  let page: AngularCliLibsExternasPage;

  beforeEach(() => {
    page = new AngularCliLibsExternasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
