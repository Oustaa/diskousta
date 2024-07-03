const { Page } = require("./Page");

type PageType = typeof Page;

class PageRegistry {
  private PageStack: PageType[];

  constructor(private page: PageType, private currentPage: PageType) {
    this.PageStack = [page];
    this.currentPage = this.PageStack[this.PageStack.length - 1];
  }

  public push(page: PageType) {
    this.PageStack.push(page);
    this.currentPage = page;
  }

  public pop() {
    if (this.PageStack.length > 1) {
      this.PageStack.pop();
      this.currentPage = this.PageStack[this.PageStack.length - 1];
    }
  }
}

module.exports = { PageRegistry };

