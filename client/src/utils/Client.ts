const fs = require("node:fs");
const path = require("node:path");
const net = require("node:net");

const { PageRegistry } = require("./pages/PageRegistry");

// a singleton implementation of a terminal instance to handle the user input
class Client {
  private static _instance: Client | undefined;
  public username: string | undefined;
  private token: string | undefined;
  private ClinetSocket: any | undefined;
  private PageRegistry: InstanceType<typeof PageRegistry>;

  private constructor(pageRegistry: InstanceType<typeof PageRegistry>) {
    this.PageRegistry = pageRegistry;
  }

  public static getClient(
    pageRegistry: InstanceType<typeof PageRegistry>
  ): Client {
    if (!Client._instance) {
      Client._instance = new Client(pageRegistry);
      Client._instance.__connect();
    }

    return Client._instance;
  }

  private getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const userAuthFileContent = fs.readFileSync(
          path.join(__dirname, "..", "data", "auth.txt"),
          "utf8"
        );

        const token = userAuthFileContent.substring(
          userAuthFileContent.indexOf("token=") + 6
        );

        this.token = token;
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }

  public async isLoggedIn(): Promise<boolean> {
    await this.getToken();

    if (this.token) return true;

    return false;
  }

  private __connect(): void {
    this.ClinetSocket = net.createConnection({
      port: 8000,
      host: "127.0.0.1",
    });

    this.ClinetSocket.on("connect", () => {
      console.log("Connected to the server");
    });

    this.ClinetSocket.on("data", (data: any) => {
      console.log("Received:", data.toString());
    });

    this.ClinetSocket.on("end", () => {
      console.log("Disconnected from the server");
    });

    this.ClinetSocket.on("error", (err: any) => {
      console.error("Socket error:", err);
    });
  }

  public login(data: { email: string; password: string }): void {
    const { email, password } = data;

    this.ClinetSocket.write(
      JSON.stringify({
        action: "LOGIN",
        data: {
          email,
          password,
        },
      })
    );
  }

  public register(): void {}

  public logout(): void {}
}

module.exports = { Client };

