import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { API_URL } from '../../utils/constants';
import request from '../../utils/request';

import { STORY_HOME } from './constants';
import { storyHomeSuccess, storyHomeError, storyHomeRespond } from './actions';

// Individual exports for testing
export function* firstScreenFunctionSaga(action) {
  // See example in containers/HomePage/saga.js
  // const requestURL = `${API_URL}:5000/getStory`;
  const requestURL = `https://reqres.in/api/register`;

  // const data = {
  //   storyInfo: {
  //     heros: action.payload.heros,
  //     secondText: action.payload.secondText,
  //   },
  // };

  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    // console.log(result);
    if (result.error == undefined) {
      // use action for send data to reducer(local api)
      yield put(storyHomeRespond(result));
    } else {
    }
  } catch (err) {}
}

// SRA:Triger firstScreenFunctionSaga using STORY_HOME action created in action js
export default function* firstScreenSaga() {
  yield takeLatest(STORY_HOME, firstScreenFunctionSaga);
}
