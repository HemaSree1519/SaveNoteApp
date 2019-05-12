import React from 'react';
import {shallow} from 'enzyme';
import Index from '../index';

describe('Login', () => {
    it('should render correctly', () => {
        const component = shallow(<Index/>);
        expect(component).toMatchSnapshot();
    });
    it("should Login with given details", () => {
        const wrapper = shallow(<Index/>);
        const instance = wrapper.instance();
        instance.handleLogin = jest.fn(instance.handleLogin);
        wrapper.find('Input[name="email"]').simulate('change', {target: {value: 'Tester'}});
        wrapper.find('Input[name="password"]').simulate('change', {target: {value: 'password'}});
        wrapper.find('Button').simulate('click');
        expect(instance.handleLogin).toHaveBeenCalled();
    });
});