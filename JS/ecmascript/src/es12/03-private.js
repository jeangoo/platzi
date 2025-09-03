class user {
  constructor(name, password, hasAssistantBot) {
    this.name = name;
    this.password = password;
    this.hasAssistantBot = hasAssistantBot;
  }
  #speak() {
    return `User: ${this.name}`;
  }
  get #uPassword() {
    return `password: ${this.password}`;
  }

  set #uPassword(p) {
    this.password = p;
  }

  knowIfHasAssistantBot() {
    if (this.hasAssistantBot) {
      return `You have an assistant bot!`;
    } else {
      return `You dont have an assistant bot!`;
    }
  }
}

const newUser = new user("jeango", 5326, true);
console.log(newUser.speak());
console.log(newUser.uPassword);
// console.log(newUser.uPassword = 8611)
// console.log(newUser.uPassword)
console.log(newUser.knowIfHasAssistantBot());