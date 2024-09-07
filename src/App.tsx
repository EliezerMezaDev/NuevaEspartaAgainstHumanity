import { useState } from "react";
import "./styles/app.scss";

import { getRandomQuestions, getRandomAnswers } from "./utils/functions";
import { FaArrowAltCircleRight, FaArrowRight, FaSyncAlt } from "react-icons/fa";

function App() {
  const [inQuestion, setInQuestion] = useState<Boolean>(true);

  const [question, setQuestion] = useState<String>(getRandomQuestions());
  const [answers, setAnswers] = useState<String>(getRandomAnswers());

  const handleCard = () => {
    setInQuestion((prev) => !prev);
  };

  const handleNextBtn = () => {
    setInQuestion(true);

    setTimeout(() => {
      setQuestion(getRandomQuestions);
      setAnswers(getRandomAnswers);
    }, 300);
  };

  return (
    <div id="container-all" className="container-all">
      <main className="main">
        <div className={inQuestion ? "card " : "card flip"}>
          <div className="card__wrapper">
            <div className="face question" onClick={handleCard}>
              <h2>{question}</h2>
            </div>

            <div className="face answers" onClick={handleCard}>
              <h2>{answers}</h2>
            </div>
          </div>
        </div>

        <div className="options">
          <button onClick={handleNextBtn}>
            <FaSyncAlt className="icon" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
