import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the storyScreen state domain
 */

const selectStoryScreenDomain = state => state.storyScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StoryScreen
 */

const makeSelectStoryScreen = () =>
  createSelector(
    selectStoryScreenDomain,
    substate => substate,
  );

export default makeSelectStoryScreen;
export { selectStoryScreenDomain };
