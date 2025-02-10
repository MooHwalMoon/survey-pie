import styled from 'styled-components';

import SelectInput from '../SelectInput';
import TextAreaImput from '../TextAreaImput';
import TextInput from '../TextInput';

function Body({ type, answer, setAnswer, options }) {
  console.log('answer', answer);
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaImput;
  }

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;
export default Body;
