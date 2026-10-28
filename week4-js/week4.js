let name = "";

const todos = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function calculate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  }
  return "I can not calculate this operator";
}

function getReply(command) {
  if (command.startsWith("Hello my name is ")) {
    name = command.slice("Hello my name is ".length);
    return "Nice to meet you " + name;
  }

  if (command === "What is my name?") {
    if (name === "") {
      return "I don't know your name yet";
    }
    return "Your name is " + name;
  }

  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const todo = command.slice(4, command.length - " to my todo".length);

    todos.push(todo);

    return todo + " added to your todo";
  }
  if (command === "What is on my todo?") {
    return "Your todo list: " + todos.join(", ");
  }

  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const todo = command.slice(
      "Remove ".length,
      command.length - " from my todo".length,
    );
    const index = todos.indexOf(todo);

    if (index !== -1) {
      todos.splice(index, 1);
      return todo + " removed from your todo";
    }
    return todo + " was not found in your todo";
  }
  if (command === "What is the date today?") {
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return day + ". of " + month + " " + year;
  }
  if (
    command.startsWith("What is ") &&
    (command.includes("+") ||
      command.includes("-") ||
      command.includes("*") ||
      command.includes("/"))
  ) {
    const parts = command.replace("?", "").split(" ");
    const firstNumber = Number(parts[2]);
    const operator = parts[3];
    const secondNumber = Number(parts[4]);

    return calculate(firstNumber, operator, secondNumber);
  }
  if (command.startsWith("Set a timer for ") && command.endsWith(" minutes")) {
    const parts = command.split(" ");
    const minutes = Number(parts[4]);

    setTimeout(
      function () {
        console.log("Timer done");
      },
      minutes * 60 * 1000,
    );
    return "Timer set for " + minutes + " minutes";
  }
  if (command === "Which programming language is difficult for you?") {
    return "JavaScript is difficult for me";
  }

  return "Sorry I don't understand your command";
}

/* console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Roshan"));
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("How are you?"));

console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(todos);

console.log(getReply("What is on my todo?"));

console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Remove swiming from my todo"));
console.log(todos);

console.log(getReply("What is the date today?"));

console.log(getReply("What is 3 + 3?"));
console.log(getReply("What is 4 * 12?"));
console.log(getReply("What is 12 - 4?"));
console.log(getReply("What is 25 / 5?"));

console.log(getReply("Set a timer for 0.05 minutes"));

console.log(getReply("Which programming language is difficult for you?"));
 */
