import styled from 'styled-components';

import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({
  questions,
  questionsLength,
  step,
  answer,
  setAnswer,
  options,
}) {
  return (
    <QuestionBoxWrapper>
      <Title>{questions.title}</Title>
      <Desc>{questions.desc}</Desc>
      <Body
        type={questions.type}
        answer={answer}
        setAnswer={setAnswer}
        options={options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  width: 371px;
  height: 28px;
  top: 60px;
  left: 60px;
  gap: 12px;
  opacity: 0px;
`;

export default QuestionBox;
