import React from 'react';
import { shallow } from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PlanetCard />)
    expect(wrapper).toMatchSnapshot();
  })
})
