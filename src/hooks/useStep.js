import { useParams } from 'react-router-dom';

function useStep() {
  const parms = useParams();

  const step = parseInt(parms.step);
  return step;
}

export default useStep;
