/*
 *
 * FirstScreen reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  STORY_HOME,
  STORY_HOME_SUCCESS,
  STORY_HOME_ERROR,
  STORY_HOME_RESPOND,
} from './constants';
// SRA: Add this reducer to main reducer
export const initialState = {
  // SRA: declare initial state
  resultData: {
    id: '',
    token: '',
  },
  states: {
    errorStatus: false,
    errorMessage: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const firstScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case STORY_HOME:
        draft.errorStatus = false;
        draft.errorMessage = '';
        break;
      case STORY_HOME_SUCCESS:
        draft.errorStatus = false;
        draft.errorMessage = '';
        break;
      case STORY_HOME_ERROR:
        draft.errorStatus = true;
        draft.errorMessage = action.payload;
        break;
      // create a case for respond
      case STORY_HOME_RESPOND:
        draft.resultData = action.payload;
        break;
    }
  });

export default firstScreenReducer;
