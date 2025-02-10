import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [serveyData, setSurvey] = useRecoilState(surveyState);
  //const surveyData = useRecoilValue(surveyState);

  const questions = serveyData?.questions || [];

  //   useEffect(() => {
  //     axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //       console.log('res', res);
  //       //questions[step] = res.data.questions;
  //       setSurvey(res.data);
  //     });
  //   }, [surveyId, setSurvey]);

  return questions[step];
}

export default useCurrentQuestion;
