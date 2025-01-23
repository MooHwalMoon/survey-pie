import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      {/* <ProgressIndicator />
      <QuestionBox
        questions={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswer;
          });
        }}
      /> */}
      <div>Hello World!!</div>
      <Routes>
        <Route path="/done/:surveyId" element={<CompletionPage />}></Route>
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
