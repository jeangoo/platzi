const bots = {
  explorer: {
    id: 1,
    name: "Explorer",
    usage: "Reminders",
    status: "active",
    createdAt: "2025-01-15",
    version: "1.0.0",
    users: {
        user1: "jean",
        user2: "midu"
    }
  },
//   claude: {
//     id: 2,
//     name: "Claude",
//     usage: "AI assistant",
//     status: "active",
//     createdAt: "2025-02-10",
//   },
  sunshine: {
    id: 3,
    name: "Sunshine",
    usage: "Chatbot",
    status: "inactive",
    createdAt: "2024-12-01",
    version: "0.9.5"
  },
  nebula: {
    id: 4,
    name: "Nebula",
    usage: "Data analysis",
    status: "active",
    createdAt: "2025-03-05",
    version: "1.3.2"
  },
  aurora: {
    id: 5,
    name: "Aurora",
    usage: "Creative writing",
    status: "active",
    createdAt: "2025-04-22",
    version: "1.2.0"
  }
}

console.log(bots.explorer.users.user1)
console.log(bots.claude?.users)
console.log(bots.claude?.id)
console.log(bots?.rapid?.id)