import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button';

function ActionButtons() {
  const step = useStep();
  const serveyId = useSurveyId();
  const [answers, setAnswers] = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const questionsLength = useRecoilValue(questionsLengthState);
  const isRequired = useRequiredOption();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;
  console.log('isRequired', isRequired);
  console.log(answers[step]);

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            //navigate('/survey/1/' + (step - 1));
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(serveyId, answers)
              .then(() => {
                setAnswers([]);
                navigate(`/done/${serveyId}`);
              })
              .catch((err) => {
                alert('에러가 발생했습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            //navigate('/survey/1/' + (step + 1));
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </ActionButtonWrapper>
  );
}

const ActionButtonWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
