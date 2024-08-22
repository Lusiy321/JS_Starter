import inquirer from "inquirer";
import fs from "node:fs";

async function db() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "agreement",
      message: "Would you to search values in DB?",
      default: false,
    },
  ]);
  if (answer.agreement === true) {
    const readFile = fs.readFileSync("db.json", "utf8");

    return process.exit(0);
  }
}

async function search() {
  const search = await inquirer.prompt([
    {
      type: "input",
      name: "user",
      message: "Enter the user's name you wanna find in DB: ",
    },
  ]);
  return search;
}

async function UserQuestions() {
  const userObj = await inquirer.prompt([
    {
      type: "input",
      name: "user",
      message: "Enter the user's name. To cancel press ENTER: ",
      validate: (input) => {
        if (input.trim() === "") {
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      name: "gender",
      message: "Choose your Gender: ",
      choices: ["male", "female"],
    },
    {
      type: "input",
      name: "age",
      message: "Enter your age:",
    },
    {
      type: "input",
      name: "age",
      message: "Введите ваш возраст:",
    },
  ]);

  return userObj;
}

async function saveDb(obj) {
  const readFile = fs.readFileSync("db.json", "utf8");

  fs.writeFile("db.json", JSON.stringify(___, null, 2), (e) => {
    if (e) {
      console.error("Error to write file");
    } else {
      UserQuestions();
    }
  });
}

async function start() {
  const userObj = await UserQuestions();
  saveDb(userObj);
}

start();
