import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Todo from "../../src_code/components/Todo";

describe("<Todo />", () => {
  let props = {
    task: "",
      deleteItem: fn => fn,
      saveItem: fn => fn,
      findItem: fn => fn
    }

  it("should call addItem method", () => {
    const item = {
      target: {
        task: "Create new Item",
      },
    }; 
    const wrapper = shallow(<Todo {...props} />);
    wrapper.instance().addItem(item);
    wrapper.setState({
      todoLists: [{ task: "item selected" }],
    });
    expect(wrapper.state("todoLists")).toEqual([{ task: "item selected" }]);
  });

  it("should call findItem method", () => {
    const item = ["item selected"];
    const wrapper = shallow(<Todo {...props} />);
    wrapper.setState({
      todoLists: [{ task: "item selected" }],
    });
    wrapper.instance().findItem(item);
    expect(wrapper.state("todoLists")).toEqual([{ task: "item selected" }]);
  });

  it("should call deleteItem method", () => {
    const item = ["item selected 1", "item selected 2"];
    const wrapper = shallow(<Todo {...props} />);
    wrapper.setState({
      todoLists: [{ task: "item selected 1" }],
    });
    wrapper.instance().deleteItem(item);
    expect(wrapper.state("todoLists")).toEqual([]);
  });

});
 

