import React from 'react';
import { shallow } from 'enzyme';
import OverViewCrawl from './OverViewCrawl';

describe('OverViewCrawl', () => {
  let wrapper;
  let mockOverview = {
    results: [
      /* eslint-disable */
      {opening_crawl: 'it was a long time ago'}
      /* eslint-enable */
    ]
  };
  beforeEach( () => {
    wrapper = shallow(<OverViewCrawl/>, { disableLifecycleMethods: true });
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call fetch with the correct params', () => {
    /* eslint-disable */
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockOverview)
      })
    );
    /* eslint-enable */
    wrapper.instance().retrieveOverview();
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/films/");
  });
});
