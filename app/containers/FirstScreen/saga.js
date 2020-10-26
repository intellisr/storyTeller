import { takeLatest, call, put, select } from 'redux-saga/effects';
import { API_URL } from '../../utils/constants';
import { push } from 'connected-react-router';
import request from '../../utils/request';

import {STORY_HOME} from './constants';
import {STORY_HOME_ERROR, STORY_HOME_SUCCESS} from './actions';

// Individual exports for testing
export default function* firstScreenFunctionSaga(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `${API_URL}:8080/ABC`;

}
