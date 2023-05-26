import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Myprofile from '../components/Profile';
import store from '../redux/store';

describe('Test Profile components', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Myprofile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
