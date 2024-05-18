// const { abstractMethod } = require("./helpers");

class PageRegistry {
  private PageStack: Page[];

  constructor(page: Page) {
    this.PageStack = [page];
  }

  public push(page: Page) {}

  public pop() {}
}

class Page {
  public pageTitle: string;
  public COMMAND_ARRAY: string[] = [
    "Prev_Page",
    "Next_Page",
    "Exit_Page",
    "Load_Page",
    "Send_Message",
    "Logge_Out",
  ] as const;

  constructor(pageTitle: string) {
    if (new.target === Page) {
      throw new TypeError("Cannot construct Page instances directly");
    }
    this.pageTitle = pageTitle;
  }
}

class Home extends Page {
  constructor(pageTitle: string) {
    super("HOME");
  }
}

const newPage = new Page("Home");

