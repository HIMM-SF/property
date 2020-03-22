import React from 'react';
import {shallow} from 'enzyme';
import Image from '../client/src/components/Image.jsx';


describe('render user profile img', () => {
    it('display the user proifle picture', () => {
        const wrapper = shallow(<Image />)
        expect(wrapper.containsMatchingElement(<img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/IMG_2634.jpg" />)).toBe(true);
    });
});