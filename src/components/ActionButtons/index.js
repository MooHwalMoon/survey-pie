import { useNavigate } from 'react-router-dom';
function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            //navigate('/survey/1/' + (step - 1));
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done/1');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            //navigate('/survey/1/' + (step + 1));
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
