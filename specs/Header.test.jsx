import React from 'react';
import {shallow} from 'enzyme';
import Header from '../client/src/components/Header.jsx';

describe('show header info', () => {
    const rooms = {
        title: 'Beautiful, Cozy, and Convenient',
        location: 'South Lake Tahoe',
        imageUrl: 'https://www.airbnb.com/users/show/323248',
        numberOfMaxGuest : 7,
        numberOfBedrooms: 3,
        numberOfBeds: 5,
        numberOfBaths: 2,
    }

    it('display the title', () => {
        const wrapper = shallow(<Header rooms={rooms} />)
        expect(wrapper.contains('Beautiful, Cozy, and Convenient')).toBe(true);
    })

    it('display the location', () => {
        const wrapper = shallow(<Header rooms={rooms} />)
        expect(wrapper.contains('South Lake Tahoe')).toBe(true);
    })

    it('display the max guest', () => {
        const wrapper = shallow(<Header rooms={rooms} />)
        expect(wrapper.contains(7)).toBe(true);
    })

    it('display the user proifle picture', () => {
        const wrapper = shallow(<Header rooms={rooms} />)
        expect(wrapper.containsMatchingElement(<img src="https://www.airbnb.com/users/show/323248" />)).toBe(true);
    })

    // it('links to neighborhood when location text is clicked', () => {
    //     const wrapper = shallow(<Header rooms={rooms} />)
    //     expect(wrapper.containsMatchingElement(<img src="https://www.airbnb.com/users/show/323248" />)).toBe(true);
    // })
})