import getData from "../utils/getData.js";
import getHash from "../utils/getHash.js";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
  <div class="characters-inner">
  <article class="characters-card">
  <img src=${character.image} alt=${character.name}/>
  <h2>${character.name}</h2>
  </article>
  <article class="characters-card">
  <h3>Episodies: ${character.episode.length}</h3>
  <h3>Status: ${character.status}</h3>
  <h3>Species: ${character.species}</h3>
  <h3>Gender: ${character.gender}</h3>
  <h3>Origin: ${character.origin.name}</h3>
  <h3>Last seen: ${character.location.name}</h3>
  </article>
  </div>
  `;
  return view;
};

export default Character;
