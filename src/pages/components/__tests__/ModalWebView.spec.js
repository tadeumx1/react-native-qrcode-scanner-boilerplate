import React from 'react';
import { shallow } from 'enzyme';

import ModalWebView from '../ModalWebView';

const props = {

    modalVisible: true,
    url: 'https://google.com.br',
    openLink: jest.fn(),
    handleButton: jest.fn()

};

it('The modal is closed', () => {
    const wrapper = shallow(<ModalWebView {...props} modalVisible={false} />)
    
    expect(wrapper).toMatchSnapshot()
});

it('renders correctly', () => {
    const wrapper = shallow(<ModalWebView {...props} />)
    
    expect(wrapper).toMatchSnapshot()
});