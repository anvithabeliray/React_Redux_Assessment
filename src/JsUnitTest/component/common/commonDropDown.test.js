import { shallow } from "enzyme";
import Enzyme from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import CommonDropDown from "../../../src_code/components/common/commonDropDown";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("passing props", () => {
  let props = {
    Content: {
      heading: "Name - Abilities Selector",
    },
    handleDropdownChange: (fn) => fn,
    handleOnChange: (fn) => fn,
  };
  it("should call handleDropdownChange method", () => {
    const wrapper = shallow(<CommonDropDown {...props} dropDownList={[]} />);
    expect(
      wrapper.find(`select`).simulate("change", {
        preventDefault: (fn) => fn,
        target: [{ name: "charmeleon" }, { name: "blaze" }],
      })
    );
    expect(wrapper.find("handleDropdownChange")).toEqual({});
  });
});
