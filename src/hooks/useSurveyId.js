import { useParams } from 'react-router-dom';

function useSurveyId() {
  const parms = useParams();

  const step = parseInt(parms.surveyId);
  return step;
}

export default useSurveyId;
