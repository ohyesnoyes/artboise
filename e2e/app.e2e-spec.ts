import { ArtboisePage } from './app.po';

describe('artboise App', () => {
  let page: ArtboisePage;

  beforeEach(() => {
    page = new ArtboisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
