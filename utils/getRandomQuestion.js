let data = [
  {
    category: "Science",
    difficulty: "medium",
    question: "What is the atomic number of oxygen?",
    options: ["8", "16", "32", "54"],
    answer: 2, // Index of the correct option in the "options" array
  },
  {
    category: "Math",
    difficulty: "medium",
    question: "What is value of pi",
    options: ["3.2", "1.6", "3.1", "3.14"],
    answer: 3, // Index of the correct option in the "options" array
  },
  {
    category: "Science",
    difficulty: "medium",
    question: "What symbol of Potassium",
    options: ["P", "Pt", "k", "T"],
    answer: 2, // Index of the correct option in the "options" array
  },
];
const getRandomQuestion = () => {
  const idx = Math.floor(Math.random() * data.length);
  return data[idx];
};

export default getRandomQuestion;
