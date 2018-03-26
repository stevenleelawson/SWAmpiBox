import React from 'react';
import { shallow } from 'enzyme';
import PeopleCardContainer from './PeopleCardContainer';

describe('PeopleCardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PeopleCardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
