/**
 *
 * FirstScreen
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Button, Input } from 'semantic-ui-react';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFirstScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderBar from '../../components/HeaderBar';
import bookImage from '../../images/book.jpg';
import girlImage from '../../images/girl.jpg';
import { storyHome, storyHomeRespond } from './actions';

// SRA add respondData array to parameter
export function FirstScreen({ history, onStoryHome, respondData }) {
  useInjectReducer({ key: 'firstScreen', reducer });
  useInjectSaga({ key: 'firstScreen', saga });

  const options = [
    { key: 'Batman', text: 'Batman', value: 'Batman' },
    { key: 'WonderWoman', text: 'Wonder Woman', value: 'WonderWoman' },
    { key: 'Hulk', text: 'Hulk', value: 'Hulk' },
  ];

  const [state, setState] = useState({
    heros: '',
    secondText: '',
  });

  const handleChange = (e, data) => {
    setState({
      ...state,
      [data.name]: data.value,
    });
  };

  const goTo = () => {
    onSubmit();
  };

  const onSubmit = () => {
    onStoryHome({
      heros: state.heros,
      secondText: state.secondText,
    });
  };

  return (
    <div>
      {console.log(state.heros)}
      {console.log(state.secondText)}
      <div className="headerBar">
        <HeaderBar />
      </div>
      <div className="firstScreenImageDiv">
        <text className="mainTopic">
          {' '}
          LOREM <br /> <br />
          IPSUM{' '}
        </text>
      </div>
      <div className="formDiv">
        <div className="fsMiddleFormDiv">
          <Form>
            <Form.Field>
              <Form.Select
                fluid
                label="Heros"
                options={options}
                placeholder="Heros"
                name="heros"
                id="heros"
                value={state.heros}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Text</label>
              {/* <input name="secondText" id="secondText" value={state.secondText} placeholder='text' onChange={handleChange} /> */}
              <Input
                name="secondText"
                id="secondText"
                type="text"
                placeholder="Last Name"
                value={state.secondText}
                onChange={handleChange}
              />
            </Form.Field>
            <label>{respondData.id}</label>
            <Button className="submitButton" type="submit" onClick={goTo}>
              SUBMIT
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

FirstScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  firstScreen: makeSelectFirstScreen(),
  // add resultData(reducer) to respondData(parameter)
  respondData: state.firstScreenReducer.resultData,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onStoryHome: story => {
      dispatch(storyHome(story));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FirstScreen);
