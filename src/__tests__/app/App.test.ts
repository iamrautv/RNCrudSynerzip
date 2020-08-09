import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../../../App';

const setUp = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = shallow(<App {...props} />);
  return component;
};

describe('App', () => {
  let component;
  beforeEach(() => {
    component = setUp();
    return component;
  });

  // it('Check snapshot', () => {
  //   const tree = renderer.create(component).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('Renders NavigationContainer', () => {
    const input = component.find({ dcaTest: 'NavigationContainer' }).length;
    const output = 1;
    expect(input).toEqual(output);
  });

  it('Renders redux Provider', () => {
    const input = component.find('Provider').length;
    const output = 1;
    expect(input).toEqual(output);
  });

  it('Renders root component', () => {
    const input = component.find('Root').length;
    const output = 1;
    expect(input).toEqual(output);
  });
});
