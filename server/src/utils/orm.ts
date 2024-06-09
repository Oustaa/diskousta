const path = require("node:path");
const fs = require("node:fs");

type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  profile_url: null | string;
};

type Group = {};

type Tables = "users" | "groups";

type TableData = {
  users: User[];
  groups: Group[];
};

class Module<T extends { id: number }> {
  tableInited: boolean = false;
  tableName: string;
  data: T[];

  constructor(tableName: string) {
    this.tableName = tableName;
    this.data = [];
  }

  async findAll(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      let tableData = "";

      const tableStream = fs.createReadStream(
        path.join(__dirname, "..", "db", `${this.tableName}.json`)
      );

      tableStream.on("data", (chunk: Buffer) => {
        tableData += chunk.toString("utf-8");
      });

      tableStream.on("end", () => {
        const formatedTableData = JSON.parse(tableData) as T[];
        this.data = formatedTableData;
        resolve(formatedTableData);
      });
    });
  }

  async find(
    by:
      | {
          value: number | string;
          label: keyof T;
        }
      | number
  ): Promise<T | undefined> {
    const data: T[] = await this.findAll();
    if (typeof by === "number") {
      return data.find((elem) => elem.id === by);
    }
    return data.find((elem) => elem[by.label] === by.value);
  }

  async create(body: Omit<T, "id">): Promise<T> {
    const data = await this.findAll();
    const created = { id: data.length, ...body } as T;

    data.push(created);

    await this.save();

    return created;
  }

  update() {}

  delete(by: { value: string; label: string }) {}

  async save() {
    const tableStream = fs.createWriteStream(
      path.join(__dirname, "..", "db", `${this.tableName}.json`)
    );

    tableStream.write(JSON.stringify(this.data));
    tableStream.end();
  }
}

(async () => {
  const usersTable = new Module<User>("users");

  let users = await usersTable.findAll();
  console.log({ users });

  // const userById = await usersTable.find({
  //   label: "username",
  //   value: "WHOOOO",
  //   });
  // console.log({ userById });

  await usersTable.create({
    email: "Oustaemail",
    password: "password",
    profile_url: "",
    username: "WHOOOO",
  });
  users = await usersTable.findAll();
  console.log({ users });
})();

