import React from 'react';
import { shallow } from 'enzyme';
import PlanetsCardContainer from './PlanetsCardContainer';

describe('PlanetsCardContainer', () => {
  it('should match the snapshot', () => {
    const mockPlanets = [
        {
          name: "Alderaan",
          residents: ['Leia Organa', 'Darth Vader']
        }
    ]
    const wrapper = shallow(<PlanetsCardContainer data={mockPlanets}/>)
    expect(wrapper).toMatchSnapshot();
  })
})
