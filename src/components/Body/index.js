import SelectInput from '../SelectInput';
import TextAreaImput from '../TextAreaImput';
import TextInput from '../TextInput';

function Body({ type, answer, setAnswer, options }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaImput;
  }

  return (
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </>
  );
}

export default Body;
