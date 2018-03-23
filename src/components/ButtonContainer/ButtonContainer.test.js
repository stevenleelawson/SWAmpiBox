import React from 'react';
import { shallow } from 'enzyme';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
  it('should match the snapshot', () => {
    const mockFavorites = {
      name: 'Luke',
      species: 'human',
      homeworld: 'tattooine'
    }
    const wrapper = shallow(<ButtonContainer favorites={[mockFavorites]}/>);
    expect(wrapper).toMatchSnapshot();
  })
})
