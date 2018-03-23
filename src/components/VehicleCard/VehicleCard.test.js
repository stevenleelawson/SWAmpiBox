import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<VehicleCard />);
    expect(wrapper).toMatchSnapshot();
  })
})
