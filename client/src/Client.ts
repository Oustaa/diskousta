const clearLine: (dir: 0 | 1 | -1) => Promise<boolean> = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve(true);
    });
  });
};

const moveCursor: (dx: number, dy: number) => Promise<boolean> = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve(true);
    });
  });
};

// a singleton emplementation of a terminal instance to handle the user input
// @ts-expect-error this is not a fucking error
class Client {
  private static _instance: Client | null = null;
  public username: string;

  constructor() {
    this.username = "OUSTA6";
  }

  public static getClient(): Client {
    if (!Client._instance) {
      Client._instance = new Client();
    }

    return Client._instance;
  }

  public login(data: { email: string; password: string }): void {
    const { email, password } = data;

    console.log({ email, password });
  }

  public register(): void {}

  public logout(): void {}
}

module.exports = Client;

