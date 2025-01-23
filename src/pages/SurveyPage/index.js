import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const parms = useParams();
  //console.log('parms', parms);

  const questions = [
    {
      surveyId: 0,
      title: '첫번째 질문입니다. 답변해주세요.',
      desc: '이 항목은 객관식입니다.',
      type: 'select',
      buttonType: 'A',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
    {
      surveyId: 0,
      title: '두번째 질문입니다. 답변해주세요.',
      desc: '추가 설명입니다. 이 항목은 단답식입니다.',
      type: 'text',
      buttonType: 'A',
      required: false,
      options: {
        placeholder: '10자 이내로 단답해주세요.',
      },
    },
    {
      surveyId: 0,
      title: '세번째 질문입니다. 답변해주세요.',
      desc: '추가 설명입니다. 이 항목은 서술형입니다.',
      type: 'textarea',
      buttonType: 'A',
      required: false,
      options: {
        placeholder: '400자 이내로 답해주세요.',
      },
    },
  ];

  const step = parseInt(parms.step);

  const [answers, setAnswers] = useState([]);
  //console.log('answers', answers);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        questions={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
        options={questions[step].options}
      />
    </div>
  );
}

export default SurveyPage;
