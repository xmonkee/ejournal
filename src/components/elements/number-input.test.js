import React from 'react';
import {mount} from 'enzyme';
import NumberInput from './number-input';

var parsedValue;

function onChange(v) {
    parsedValue = v;
}

const inputToOutputAndStateMap = [
    {text: '', error: false, value: null},
    {text: '123', error: false, value: 123},
    {text: 'abc', error: true, value: null},
    {text: '123abc', error: true, value: null},
]

it('parses string to number', () => {
    const numberInput = mount(<NumberInput onChange={onChange}/>);
    const input = numberInput.find('input');
    for (const {text, error, value} of inputToOutputAndStateMap) {
        input.simulate('change', {target: {value: text}});
        expect(numberInput.state().error).toBe(error);
        expect(parsedValue).toBe(value);
    }
});