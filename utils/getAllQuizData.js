import axios from "axios";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const getQuizAllData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/questions");
    return shuffle(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default getQuizAllData;
