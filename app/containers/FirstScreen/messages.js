/*
 * FirstScreen Messages
 *
 * This contains all the text for the FirstScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FirstScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FirstScreen container!',
  },
});
