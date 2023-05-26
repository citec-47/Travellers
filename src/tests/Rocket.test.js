import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rocket';
import store from '../redux/store';

describe('Test Rockets component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
