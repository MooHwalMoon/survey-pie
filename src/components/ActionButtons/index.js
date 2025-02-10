import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button';

function ActionButtons() {
  const step = useStep();
  const questionsLength = useRecoilValue(questionsLengthState);

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
            navigate(`/done/${step}`);
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            //navigate('/survey/1/' + (step + 1));
            navigate(`${step + 1}`);
          }}
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
