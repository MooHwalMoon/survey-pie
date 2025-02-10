import { atom } from 'recoil';

const testState = atom({
  key: 'textState',
  default: ['a', 'b', 'c', 'd', 'e'],
});

export default testState;
