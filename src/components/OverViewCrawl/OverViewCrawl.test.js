import React from 'react';
import { shallow } from 'enzyme';
import OverViewCrawl from './OverViewCrawl';

describe('OverViewCrawl', () => {
  let wrapper;
  let mockOverview = {
    results: [
      {opening_crawl: 'it was a long time ago'}
    ]
  }
  beforeEach( () => {
    wrapper = shallow(<OverViewCrawl />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it.skip('should call fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockOverview)
      })
    )
    wrapper.instance().retrieveOverview()
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/films/")
  })
})
