const bot = {
    id: "1",
    botname: "claude",
    usage: "Reminders",
}

const {botname, ...values} = bot
console.log(botname)
console.log(values)