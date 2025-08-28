// class Bot {}

class bot {
    createBot() {
        return 'New bot was created.'
    }
    botGreet() {
        return 'Hello, im a bot!'
    }
}

const claude = new bot()
console.log(claude.createBot())
console.log(claude.botGreet())

class bot {
    constructor() {
        console.log("New bot.")
    }
     botGreet() {
        return 'Hello, im a bot!'
    }
}

const assistant = new bot()

class assistantBot {
    constructor(name) {
        this.name = name;
    }
    botSpeak() {
        return `Hello!`;
    }
    botGreeting() {
        return `${this.botSpeak()}, im ${this.name}, your personal assistant bot.`;
    }
}

const robot = new assistantBot('Robot');
console.log(robot.botGreeting());

class user {
    constructor(name, password, hasAssistantBot) {
        this.name = name
        this.password = password
        this.hasAssistantBot = hasAssistantBot
    }
    speak() {
        return `User: ${this.name}`
    }
    get uPassword() {
        return `password: ${this.password}`
    }

    set uPassword(p) {
        this.password = p
    }

    knowIfHasAssistantBot() {
        if(this.hasAssistantBot) {
            return `You have an assistant bot!`
        } else {
            return `You dont have an assistant bot!`
        }
    }
}

const newUser = new user('jeango', 5326, true)
console.log(newUser.speak())
console.log(newUser.uPassword)
// console.log(newUser.uPassword = 8611)
// console.log(newUser.uPassword)
console.log(newUser.knowIfHasAssistantBot())
