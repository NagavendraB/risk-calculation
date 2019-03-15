import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InitialSumTextField from './initial-sum-text-field';

Enzyme.configure({ adapter: new Adapter() });

describe('InitialSumTextField  Component', () => {
  it('`InitialSumTextField` exist and be a component', () => expect(InitialSumTextField).toBeInstanceOf(Function));
  
  it('check the initial sum value is displayed', () => {  
    const props = {
      onChangeInitialSum: () => null
    };
    const initialSumComponent = mount(<InitialSumTextField {...props} />).find('input');
    expect(initialSumComponent.hasClass('initial-sum')).toEqual(true);
  });

  it('check the onChange callback', () => {  
    const onChangeInitialSum = jest.fn()
    const props = {
      onChangeInitialSum
    };
    const initialSumComponent = mount(<InitialSumTextField {...props} />).find('input');
    initialSumComponent.simulate('change');
    expect(onChangeInitialSum).toHaveBeenCalled();
  });
})
