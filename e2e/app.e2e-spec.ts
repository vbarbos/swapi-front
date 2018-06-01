import { Angular4SeedPage } from './app.po';

describe('angular5-seed App', () => {
  let page: Angular4SeedPage;

  beforeEach(() => {
    page = new Angular4SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
