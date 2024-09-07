import { questions, answers } from "../assets/data";

const getRandom = (nLimit: number) =>
  Number(Math.floor(Math.random() * (nLimit - 1)));

export const getRandomQuestions = () => questions[getRandom(questions.length)];
export const getRandomAnswers = () => answers[getRandom(answers.length)];
