import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Chart from './chart';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Chart Component', () => {
  it('`Chart` exist and be a component', () => expect(Chart).toBeInstanceOf(Function));
});