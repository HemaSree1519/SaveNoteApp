import React from 'react';
import { shallow } from 'enzyme';
import Index from '../index';
describe('SignUp', () => {
    let component;
    beforeEach(() => {component = shallow(<Index/>)});
    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it("should signUp with given details",() => {
        const instance = component.instance();
        instance.handleSignUp = jest.fn(instance.handleSignUp);
        component.find('Input[name="email"]').simulate('change', {target: {value: 'Tester'}});
        component.find('Input[name="password"]').simulate('change', {target: {value: 'password'}});
        component.find('Input[name="rePassword"]').simulate('change', {target: {value: 'password'}});
        component.find('Button').simulate('click');
        expect(instance.handleSignUp).toHaveBeenCalled();
    });
});