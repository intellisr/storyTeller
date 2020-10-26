/**
 *
 * Asynchronously loads the component for StoryScreen
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
