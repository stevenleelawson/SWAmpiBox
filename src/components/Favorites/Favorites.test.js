import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {
  it('should match the snapshot', () => {
    const mockFavorites = [
      {name: 'Luke'}
    ]
    const wrapper = shallow(<Favorites favorites={mockFavorites}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
