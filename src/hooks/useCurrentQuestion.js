import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const serveyData = useRecoilValue(surveyState);
  const questions = serveyData?.questions || [];

  return questions[step];
}

export default useCurrentQuestion;
