function newBotCreated(name, usage, uId) {
  return {
    id: uId,
    name,
    usage,
  };
}

console.log(newBotCreated((usage = "AI assistant"), (name = "Robot"), 1));
