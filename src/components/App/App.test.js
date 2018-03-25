import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let mockCard;
  let mockPeople;

  beforeEach( () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true});
    mockCard = {
      name: 'taco'
    };
    mockPeople = {
      results: [
        {name: 'Luke'}
      ]
    };

  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('toggleFavorites should add a card to the favorites array', () => {
    wrapper.instance().toggleFavorites(mockCard);
    expect(wrapper.state('favorites').length).toEqual(1);
  });
  it('toggleFavorites should unfavorite a card', () => {
    wrapper.instance().toggleFavorites(mockCard);
    wrapper.instance().toggleFavorites(mockCard);
    expect(wrapper.state('favorites').length).toEqual(0);
  });
  it('should call fetch for people with the correct params', () => {
    /* eslint-disable */
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      })
    )
    /* eslint-enable */
    wrapper.instance().getPeople();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/");
  });
  it.skip('should update the people array in state', () => {
    /* eslint-disable */
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      })
    )
    wrapper.instance().fetchSpecies = jest.fn().mockImplementation( () => Promise.resolve({
      mockPeople
    }))
    wrapper.update()
    wrapper.instance().fetchHomeworld = jest.fn().mockImplementation( () => Promise.resolve({
      name: 'Luke'
    }))
    /* eslint-enable */
    wrapper.update();
    wrapper.instance().getPeople();
    wrapper.update();

    expect(wrapper.state('people')).toEqual(mockPeople);
  });
  it('should call fetch for vehicles with the correct params', () => {
    const mockVehicles = {
      results: [
        {name: "SandCrawler"}
      ]
    };
    /* eslint-disable */
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockVehicles)
      })
    )
    /* eslint-enable */
    wrapper.instance().getVehicles();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/vehicles/");
  });
  it('should call fetch for planets with the correct params', () => {
    const mockPlanets = [
      {name: "Alderaan"}
    ];
    /* eslint-disable */
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPlanets)
      })
    )
    /* eslint-enable */
    wrapper.instance().getPlanets();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets/");
  });
});
