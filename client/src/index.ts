const { ask } = require("./helpers/index");

const { Client } = require("./utils/Client");
const { PageRegistry } = require("./utils/pages/PageRegistry");

(async () => {
  const client = Client.getClient(new PageRegistry());

  const isLoggedIn = await client.isLoggedIn();

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

  // process.exit(0);
})();

