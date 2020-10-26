/**
 *
 * Asynchronously loads the component for FirstScreen
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
