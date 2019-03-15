import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './menu';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Menu Component', () => {
  it('`Menu` exist and be a component', () => expect(Menu).toBeInstanceOf(Function));
});