const { input: Inp, select, Separator } = require("@inquirer/prompts");

type ChoicesValue = {
  name: string;
  value: string | number;
  description: string;
  disabled: string | boolean;
};

type AskProps = {
  type: "input" | "list";
  choices: ChoicesValue[] | undefined;
} & (
  | {
      type: "input";
    }
  | { type: "list"; choices: ChoicesValue[] }
);

const askQuestion = async ({ type, choices }: AskProps) => {
  let answer: string;
  if (type === "list") {
    answer = await select({
      message: "Select a package manager",
      choices,
    });
  } else {
    answer = await Inp({ message: "Enter your name" });
  }

  return answer;
};

module.exports.ask = askQuestion;

