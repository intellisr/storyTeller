/*
 *
 * FirstScreen reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, STORY_HOME, STORY_HOME_SUCCESS, STORY_HOME_ERROR } from './constants';

export const initialState = {
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
        draft.errorStatus= false;
        draft.errorMessage= '';
        break;
      case STORY_HOME_SUCCESS:
        draft.errorStatus=false;
        draft.errorMessage= '';
        break;
      case STORY_HOME_ERROR:
        draft.errorStatus=true;
        draft.errorMessage=action.payload;
        break;
    }
  });

export default firstScreenReducer;
