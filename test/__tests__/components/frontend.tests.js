import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Home from '../../../app/components/Home'

/* Whatever version we use have the following syntax....none of the tutorials i found has it

{ not:
      { toBe: [Function: throwingMatcher],
        toBeCloseTo: [Function: throwingMatcher],
        toBeDefined: [Function: throwingMatcher],
        toBeFalsy: [Function: throwingMatcher],
        toBeGreaterThan: [Function: throwingMatcher],
        toBeGreaterThanOrEqual: [Function: throwingMatcher],
        toBeInstanceOf: [Function: throwingMatcher],
        toBeLessThan: [Function: throwingMatcher],
        toBeLessThanOrEqual: [Function: throwingMatcher],
        toBeNaN: [Function: throwingMatcher],
        toBeNull: [Function: throwingMatcher],
        toBeTruthy: [Function: throwingMatcher

        toBeUndefined: [Function: throwingMatcher],
        toContain: [Function: throwingMatcher],
        toContainEqual: [Function: throwingMatcher],
        toEqual: [Function: throwingMatcher],
        toHaveLength: [Function: throwingMatcher],
        toHaveProperty: [Function: throwingMatcher],
        toMatch: [Function: throwingMatcher],
        toMatchObject: [Function: throwingMatcher],
        lastCalledWith: [Function: throwingMatcher],
        toBeCalled: [Function: throwingMatcher],
        toBeCalledWith: [Function: throwingMatcher],
        toHaveBeenCalled: [Function: throwingMatcher],
        toHaveBeenCalledTimes: [Function: throwingMatcher],
        toHaveBeenCalledWith: [Function: throwingMatcher],
        toHaveBeenLastCalledWith: [Function: throwingMatcher],
        toThrow: [Function: throwingMatcher],
        toThrowError: [Function: throwingMatcher],
        toMatchSnapshot: [Function: throwingMatcher],
        toThrowErrorMatchingSnapshot: [Function: throwingMatcher] },
     toBe: [Function: throwingMatcher],
     toBeCloseTo: [Function: throwingMatcher],
     toBeDefined: [Function: throwingMatcher],
     toBeFalsy: [Function: throwingMatcher],
     toBeGreaterThan: [Function: throwingMatcher],
     toBeGreaterThanOrEqual: [Function: throwingMatcher],
     toBeInstanceOf: [Function: throwingMatcher],
     toBeLessThan: [Function: throwingMatcher],
     toBeLessThanOrEqual: [Function: throwingMatcher],
     toBeNaN: [Function: throwingMatcher],
     toBeNull: [Function: throwingMatcher],
     toBeTruthy: [Function: throwingMatcher],
     toBeUndefined: [Function: throwingMatcher],
     toContain: [Function: throwingMatcher],
     toContainEqual: [Function: throwingMatcher],
     toEqual: [Function: throwingMatcher],
     toHaveLength: [Function: throwingMatcher],
     toHaveProperty: [Function: throwingMatcher],
     toMatch: [Function: throwingMatcher],
     toMatchObject: [Function: throwingMatcher],
     lastCalledWith: [Function: throwingMatcher],
     toBeCalled: [Function: throwingMatcher],
     toBeCalledWith: [Function: throwingMatcher],
     toHaveBeenCalled: [Function: throwingMatcher],
     toHaveBeenCalledTimes: [Function: throwingMatcher],
     toHaveBeenCalledWith: [Function: throwingMatcher],
     toHaveBeenLastCalledWith: [Function: throwingMatcher],
     toThrow: [Function: throwingMatcher],
     toThrowError: [Function: throwingMatcher],
     toMatchSnapshot: [Function: throwingMatcher],
     toThrowErrorMatchingSnapshot: [Function: throwingMatcher] }
*/


//console.log(Home);

describe('<Home />', () => {
  /*it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });*/

  it('renders an home', () => {
    const wrapper = shallow(<Home />)
  //  console.log(wrapper.debug())
  //  console.log(wrapper.contains(<p>HAHO</p>))
    console.log(expect(wrapper.contains(<p>HAHO</p>)))
    expect(wrapper.contains(<p>HAHO</p>)).toBeTruthy();
  });

  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.title')).toHaveLength(1)
  });

});
