/**
 *
 * StoryScreen
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Button, Input } from 'semantic-ui-react';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStoryScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function StoryScreen() {
  useInjectReducer({ key: 'storyScreen', reducer });
  useInjectSaga({ key: 'storyScreen', saga });

  return (
    <div className="storyScreenMainDiv">
      <div className="middleStoryDiv">
Example......
      </div>
    </div>
  );
}

StoryScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  storyScreen: makeSelectStoryScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StoryScreen);
