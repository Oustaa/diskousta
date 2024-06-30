const { ask } = require("./helpers/index");

const { Client } = require("./utils/Client");

(async () => {
  const client = Client.getClient();

  const isLoggedIn = await client.isLoggedIn();

  console.log(isLoggedIn);

  let answer: number = -1;

  client.login({ email: "test@example.com", password: "dsfddf" });

  // answer = await ask({
  //   type: "list",
  //   choices: [
  //     {
  //       name: "Log in",
  //       value: 0,
  //       description: "Login to your account",
  //     },
  //     {
  //       name: "Sign up",
  //       value: 1,
  //       description: "Create a new account",
  //     },
  //   ],
  // });

  // process.exit(0);
})();

