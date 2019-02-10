import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Welcome from '../index';

const props = {

    navigation: {

        navigate: jest.fn(),
        dispatch: jest.fn()

    }

};

it('renders correctly', () => {
    const wrapper = shallow(<Welcome {...props} />);
    
    expect(wrapper).toMatchSnapshot()
});