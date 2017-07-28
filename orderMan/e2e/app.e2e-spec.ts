import { OrderManPage } from './app.po';

describe('order-man App', function() {
  let page: OrderManPage;

  beforeEach(() => {
    page = new OrderManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
