const net = require("node:net");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { ask } = require("./helpers/index");

const ClientModule = require("./utils/Client");

const rl = readline.createInterface({ input, output });

const client = ClientModule.Client.getClient();

const loginCredentials = async (): Promise<{
  email: string;
  password: string;
}> => {
  return { email: "string", password: "string" };
};

(async () => {
  // const socket = net.createConnection({
  //   port: 8000,
  // });
  let answer: number = -1;

  answer = await ask({
    type: "list",
    choices: [
      {
        name: "Log in",
        value: 0,
        description: "Login to your account",
      },
      {
        name: "Sign up",
        value: 1,
        description: "Create a new account",
      },
    ],
  });

  console.log(answer);

  process.exit(0);
})();

