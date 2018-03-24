import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<App />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('toggleFavorites should add a card to the favorites array', () => {
  //   const mockCard = {
  //     name: 'taco'
  //   }
  //   wrapper.instance().toggleFavorites(mockCard);
  //   expect(wrapper).state('favorites').toBe(1);
  // })
})
