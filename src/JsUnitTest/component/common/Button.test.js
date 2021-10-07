import { shallow } from "enzyme";
import Enzyme from "enzyme";
import React from 'react';
import sinon from "sinon";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import ButtonComponent from "../../../src_code/components/common/Button";

describe('ButtonComponent ', () => {

  it('should render a submit button', () => {
    const mockCallBack = sinon.spy();
    const wrapper = shallow(<ButtonComponent onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.calledOnce).toBe(true);
  });
  
}); 