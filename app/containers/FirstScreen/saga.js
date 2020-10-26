import { takeLatest, call, put, select } from 'redux-saga/effects';
import { API_URL } from '../../utils/constants';
import { push } from 'connected-react-router';
import request from '../../utils/request';

import {STORY_HOME} from './constants';
import {storyHomeSuccess, storyHomeError} from './actions';

// Individual exports for testing
export function* firstScreenFunctionSaga(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `${API_URL}:8080/ABC`;

  const data = {
    storyInfo: {
      heros: action.payload.heros,
      secondText: action.payload.secondText,
    },
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    console.log(result);
    if (result.error == undefined) {
      yield put(push('/story_screen/'+result));
      yield put(storyHomeSuccess());
    } else {
      yield put(storyHomeError(result.error));
    }
  } catch (err) {
    yield put(storyHomeError(result.error));
  }
}

export default function* firstScreenSaga() {
  yield takeLatest(STORY_HOME, firstScreenFunctionSaga);
}
