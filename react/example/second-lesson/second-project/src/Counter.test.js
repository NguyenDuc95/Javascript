import React from 'react';

import renderer from "react-test-renderer";
import Counter from './Component/Counter';
import { mount } from 'enzyme';

describe('Counter', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Counter match={{ params: { id: 1 } }} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('button text should be increase2', () => {
        const component = mount(<Counter match={{ params: { id: 1 } }} />);
        expect(component.find("button").text()).toEqual("Increase2")
    })
    it('init', () => {
        const component = mount(<Counter match={{ params: { id: 1 } }} />);
        expect(component.find("div.counter").text()).toEqual("1")
    })
})