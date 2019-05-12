import React from 'react';
import { shallow } from 'enzyme';
import Index from '../index';
describe('SignUp', () => {
    it('should render correctly', () => {
        const component = shallow(<Index/>);
        expect(component).toMatchSnapshot();
    });
    it("should signUp with given details",() => {
        const wrapper = shallow(<Index/>);
        const instance = wrapper.instance();
        instance.handleSignUp = jest.fn(instance.handleSignUp);
        wrapper.find('Input[name="email"]').simulate('change', {target: {value: 'Tester'}});
        wrapper.find('Input[name="password"]').simulate('change', {target: {value: 'password'}});
        wrapper.find('Input[name="rePassword"]').simulate('change', {target: {value: 'password'}});
        wrapper.find('Button').simulate('click');
        expect(instance.handleSignUp).toHaveBeenCalled();
    });
});