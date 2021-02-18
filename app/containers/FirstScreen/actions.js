/*
 *
 * FirstScreen actions
 *
 */

import {
  DEFAULT_ACTION,
  STORY_HOME,
  STORY_HOME_SUCCESS,
  STORY_HOME_ERROR,
  STORY_HOME_RESPOND,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function storyHome(payload) {
  return {
    type: STORY_HOME,
    payload,
  };
}

export function storyHomeRespond(payload) {
  return {
    type: STORY_HOME_RESPOND,
    payload,
  };
}

export function storyHomeSuccess() {
  return {
    type: STORY_HOME_SUCCESS,
  };
}

export function storyHomeError(payload) {
  return {
    type: STORY_HOME_ERROR,
    payload,
  };
}
