const bot = {
  id: "1",
  botname: "claude",
  usage: "Reminders",
};

const { botname, ...values } = bot;
console.log(botname);
console.log(values);

const apiResponse = {
  id: 1,
  name: "Product A",
  price: 25.99,
  category: "Electronics",
};
const { name, ...apiResponseValues } = apiResponse;
console.log(name);
console.log(apiResponseValues);


const randomId = Math.floor(Math.random() * 825)

const fetchData = async () => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((res) => res.json())
    .then((data) => {
      const { id, name, order } = data;
      const { abilities: [{ ability: {name: primaryAbility} }] } = data
      console.log(`Id: ${id}`);
      console.log(`Name: ${name}`);
    //   console.log(`Pokedex number: ${order}`);
      console.log(`Ability: ${primaryAbility}`);
    });
};

fetchData();
