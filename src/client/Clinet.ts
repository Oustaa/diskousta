// a singleton emplementation of a terminal instance to handle the user input
class Clinet {
  private static _instance: Clinet | null = null;
  public username: string;

  constructor() {
    this.username = "";
  }

  public static getInstance(): Clinet {
    if (!Clinet._instance) {
      Clinet._instance = new Clinet();
    }

    return Clinet._instance;
  }

  public login(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  public logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}

const instances1 = Clinet.getInstance();

console.log(instances1.username);

