const API_URL = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const baseURL = id ? `${API_URL}${id}` : API_URL;
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
