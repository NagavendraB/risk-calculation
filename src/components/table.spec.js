import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './table';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Table Component', () => {
  it('`Table` exist and be a component', () => expect(Table).toBeInstanceOf(Function));

  it('check the initial sum value is displayed', () => {  
    const props = {
      timeSeries: 10
    };
    const initialSumComponent = mount(<Table {...props} />);
    expect(initialSumComponent.prop('timeSeries')).toEqual(10);
  });
});