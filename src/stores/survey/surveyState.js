import axios from 'axios';
import { selector } from 'recoil';

import mainApi from '../../services/apis/mainApi';
import getSurvey from '../../services/getSurvey';

const serveyState = selector({
  key: 'serubeyState',
  get: async () => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);
    console.log(window.location.pathname.split('/')[2]);

    // const res = await axios.get(
    //   `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
    // );
    console.log('res', res);

    return res.data;
  },
});

export default serveyState;
