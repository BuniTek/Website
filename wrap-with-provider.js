import * as React from 'react';
import { element } from 'prop-types';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Wrapper = ({ element }) => <Provider store={store}>{element}</Provider>;

Wrapper.propTypes = {
  element: element.isRequired,
};

export default Wrapper;
