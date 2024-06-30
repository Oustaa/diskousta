const inquirer = require("inquirer");

type AskProps = {
  type: "input" | "choice";
  message: string;
  choices?: (string | number)[];
  defaultValue?: string;
  validate?: (input: string | undefined) => boolean;
} & (
  | {
      type: "input";
    }
  | {
      type: "choice";
      choices: (string | number)[];
    }
);

export const askQuestion = async ({
  type,
  message,
  defaultValue,
  choices,
  validate,
}: AskProps) => {
  const answer = await inquirer.prompt({
    name: "answer",
    type,
    message,
    choices,
    validate,
    default() {
      return defaultValue;
    },
  });

  return answer.answer;
};

