import React from 'react';
import { shallow } from 'enzyme';

import QRCodeScreen from '../QRCodeScreen';

const props = {

    

}

describe('<QRCodeScreen>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<QRCodeScreen />);
    expect(wrapper).toMatchSnapshot();
  });

});
