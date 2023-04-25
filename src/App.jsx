import { useState } from "react";
import "./App.css";
import SurveyCard from "./SurveyCard";
import ThankYouCard from "./ThankYouCard";

function App() {

  const [surveyScore, setSurveyScore] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const addSurveyScore = (userInput) => {
    setSurveyScore(userInput)
    console.log.surveyScore
  }

  const handleSubmissionChange = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="grid place-items-center">
      <div className="min-w-[375px] max-w-[375px] min-h-screen lg:min-w-full grid place-items-center bg-black">
        {!isSubmitted && <SurveyCard addSurveyScore={addSurveyScore} handleSubmissionChange={handleSubmissionChange}/>}
        {isSubmitted && <ThankYouCard surveyScore={surveyScore}/>}
      </div>
    </div>
  );
}

export default App;
