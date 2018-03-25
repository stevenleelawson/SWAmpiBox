import React from 'react';
import { shallow } from 'enzyme';
import VehiclesCardContainer from './VehiclesCardContainer';

describe('VehiclesCardContainer', () => {
  it('should match the snapshot', () => {
    const mockData = {
      results: [ name: 'speeder' ]
    }
    const wrapper = shallow(<VehiclesCardContainer data={mockData}/>)
    expect(wrapper).toMatchSnapshot();
  })
})
