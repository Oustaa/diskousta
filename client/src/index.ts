const net = require("node:net");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

// @ts-expect-error this is not  a fucking error
const Client = require("./Client");

const rl = readline.createInterface({ input, output });

const client = Client.getClient();

const loginCredentials = async (): Promise<{
  email: string;
  password: string;
}> => {
  return { email: "string", password: "string" };
};

(async () => {
  let answer: number = -1;
  console.log("#################### WELCOME TO DISKOSTA ####################");
  console.log(`> 0 to quit\n> 1 CREATE ACCOUNT\n> 2 LOGIN TO YOUR ACCOUNT`);
  while (answer !== 0) {
    answer = Number(
      await rl.question(
        "> please Enter the number correspond to acction want to preform: "
      )
    );

    switch (answer) {
      case 1:
        await client.login(await loginCredentials());
        break;
      case 2:
        await client.register();
        break;
    }
  }
})();

