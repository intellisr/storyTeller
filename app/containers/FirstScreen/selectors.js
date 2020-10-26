import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the firstScreen state domain
 */

const selectFirstScreenDomain = state => state.firstScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FirstScreen
 */

const makeSelectFirstScreen = () =>
  createSelector(
    selectFirstScreenDomain,
    substate => substate,
  );

export default makeSelectFirstScreen;
export { selectFirstScreenDomain };
