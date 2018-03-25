import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let mockCard;
  let mockPeople;
  let getPeople;
  let fetchHomeworld;
  let fetchSpecies;
  let mockHomeWorld;
  beforeEach( () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true})
    mockCard = {
      name: 'taco'
    }
    mockPeople = {
      results: [
        {name: 'Luke'}
      ]
    }
    mockHomeWorld = [ {name: 'Luke'}]
    // getPeople = jest.fn();
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('toggleFavorites should add a card to the favorites array', () => {
    wrapper.instance().toggleFavorites(mockCard);
    expect(wrapper.state('favorites').length).toEqual(1);
  })
  it('toggleFavorites should unfavorite a card', () => {
    wrapper.instance().toggleFavorites(mockCard);
    wrapper.instance().toggleFavorites(mockCard);
    expect(wrapper.state('favorites').length).toEqual(0);
  })
  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      })
    )
    wrapper.instance().getPeople()
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/")
  })
  it.skip('should update the people array in state', () => {
    const expected = {
      name: 'Luke'
    }
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      })
    )
    fetchSpecies = jest.fn().mockImplementation( () => Promise.resolve({
      mockPeople
    }))
    fetchHomeworld = jest.fn().mockImplementation( () => Promise.resolve({
      name: 'Luke'
    }))
    wrapper.instance().getPeople();
    wrapper.instance().fetchSpecies();
    wrapper.instance().fetchHomeworld();

    expect(wrapper.state('people')).toEqual(mockPeople)
  })
 })
