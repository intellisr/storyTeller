/**
 *
 * HeaderBar
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Input, Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HeaderBar() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3} className="headerLink">HOME</Grid.Column>
        <Grid.Column width={3} className="headerLink">HOW IT WORKS</Grid.Column>
        <Grid.Column width={3} className="headerLink">CONTACT US</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

HeaderBar.propTypes = {};

export default memo(HeaderBar);
