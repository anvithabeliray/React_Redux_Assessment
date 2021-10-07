import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import AddItem from '../../src_code/components/AddItem';

describe('rendering createItem component', () => {
  let props = {
    content: {
      heading: "To Do List",
      addButton: "Add",
      editButton: "Edit",
      deleteButton: "Delete",
      modelHeader: "Edit your item",
      okayButton: "OK",
      cancelButton: "Cancel",
      placeholder: "Enter task"
    },
    addItem: fn => fn
  }
  it('should call handleOnChange method', () => {
    const value = {
      target: {
        value: "Create Item"
      }
    }
    const wrapper = shallow(<AddItem />);
    wrapper.instance().handleOnChange(value);
    expect(wrapper.state('input')).toEqual("Create Item");
  });

  it('should call handleOnCreate method', () => {
    const value = {
      target: {
        input: ""
      }
    }
    const wrapper = shallow(<AddItem {...props} />);
    wrapper.instance().handleOnCreate({
      preventDefault: () => { },
      value
    });
    expect(wrapper.state('input')).toEqual(""); 
  });

  it('renders button for handleoncreate', () => {
    const wrapper = shallow(<AddItem {...props} />);
    wrapper.find(`[id="hn-create"]`).simulate('click', { target: { input: "" }, preventDefault: fn => fn });
    expect(wrapper.state('input')).toEqual(""); 
  });

  it('renders inputfield for handleonchange', () => {
    const wrapper = shallow(<AddItem {...props} />);
    const inputField=wrapper.find(`[id="submit-click"]`).simulate('change', { target: { input: "" } });
    expect(inputField.find('#submit-click').exists()).toBe(true);
  });
  
}); 