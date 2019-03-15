import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RiskLevelSelector from './risk-level-selector';

Enzyme.configure({ adapter: new Adapter() });

describe('Test RiskLevelSelector Component', () => {
  it('`RiskLevelSelector` exist and be a component', () => expect(RiskLevelSelector).toBeInstanceOf(Function));

  it('check the initial sum value is displayed', () => {  
    const props = {
        maxRiskLevel: 10
    };
    const initialSumComponent = mount(<RiskLevelSelector {...props} />);
    expect(initialSumComponent.prop('maxRiskLevel')).toEqual(10);
  });

  it('should render the component proparly for value null to maxRiskLevel prop value', () => {  
    const props = {
        maxRiskLevel: null
    };
    const initialSumComponent = mount(<RiskLevelSelector {...props} />);
    expect(initialSumComponent.prop('maxRiskLevel')).toEqual(null);
  });

  it('check the initial sum value prop type', () => {  
    const props = {
        maxRiskLevel: 10
    };
    const initialSumComponent = mount(<RiskLevelSelector {...props} />);
    expect(initialSumComponent.prop('maxRiskLevel')).not.toBeNaN();
  });

  it('check the onChange callback', () => {  
    const onChangeRiskLevel = jest.fn()
    const props = {
        maxRiskLevel: 10,
        onChangeRiskLevel
    };
    const initialSumComponent = mount(<RiskLevelSelector {...props} />).find('select');
    initialSumComponent.simulate('change');
    expect(onChangeRiskLevel).toHaveBeenCalled();
  });
});