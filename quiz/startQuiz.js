import getQuizAllData from "../utils/getAllQuizData.js";
import displayQuiz from "./displayQuiz.js";

function* quizQuestionGenerator(quizData) {
  for (const itr of quizData) {
    yield itr;
  }
  return;
}

let userScoreDetail = {
  score: 0,
  streak: 0,
};

const startTheQuiz = async (interaction) => {
  const quizData = await getQuizAllData();
  let quizQuestionItr = quizQuestionGenerator(quizData);
  let startTime = Date.now();
  await displayQuiz(interaction, startTime, quizQuestionItr, userScoreDetail);
};

export default startTheQuiz;
