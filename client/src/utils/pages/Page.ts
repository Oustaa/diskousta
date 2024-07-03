class Page {
  public pageTitle: string;
  public COMMAND_ARRAY: readonly string[] = [
    "Prev_Page",
    "Next_Page",
    "Exit_Page",
    "Load_Page",
    "Send_Message",
    "Logge_Out",
  ];

  constructor(pageTitle: string) {
    if (new.target === Page) {
      throw new TypeError("Cannot construct Page instances directly");
    }
    this.pageTitle = pageTitle;
  }
}

module.exports = { Page };
