const chalk = require("chalk");
const figlet = require("figlet");
const { Page } = require("./Page");

export class Home extends Page {
  constructor(pageTitle: string) {
    figlet("Home Page", (err: any, data: string) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }

      console.log(chalk.green(data));
    });
    super("HOME");
  }
}

