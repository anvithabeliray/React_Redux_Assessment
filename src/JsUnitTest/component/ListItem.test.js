import { shallow } from 'enzyme'; 
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import ListItem from '../../src_code/components/ListItem';

describe('<ListItem />', () => {
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
    task: "Edited Item",
    editInput: "updated value",
    deleteItem: fn => fn,
    saveItem: fn => fn,
  }

  it('should call handleModal method', () => {
    const value = {
      target: {
        show: true
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleModal(value);
    expect(wrapper.state('show')).toEqual(true); 
  });

  it('should call handleEdit method', () => {
    const value = {
      target: {
        show: true
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleEdit(value);
    expect(wrapper.state('show')).toEqual(true); 
  });
  
  it('should call handleOnChange method', () => {
    const value = {
      target: {
        editInput: "make changes"
      }
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().handleOnChange(value);
    expect(wrapper.exists()).toBe(true); 
  });

  it('should call onSaveClick method', () => {
    const value = {
      preventDefault: fn => fn,
    }
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.instance().onSaveClick(value);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders inputfield for handleModal', () => {
    const wrapper = shallow(<ListItem {...props} />);
    wrapper.find(`[id="edited-popup"]`).simulate('hide', { target: { show: false } });
    expect(wrapper.state('show')).toEqual(false);  
  });

  it('renders button for saveItem', () => {
    const wrapper = shallow(<ListItem {...props} />);
    const editField = wrapper.find(`[id="edited-field"]`).simulate('change', { target: { editInput: "Edited task" } });
    expect(editField.find('#edited-field').exists()).toBe(true);
  });

  it('renders button for handleOnEdit', () => {
    const wrapper = shallow(<ListItem {...props} />);
    const editButton = wrapper.find(`[id="edit-button"]`).simulate('click', { onEditClick: fn => fn, handleModal: fn => fn });
    expect(editButton.find('#edit-button').exists()).toBe(true);
  }); 

  it('renders button for handleModal', () => {
    const wrapper = shallow(<ListItem {...props} />);
    const buttonClick = wrapper.find(`[id="edited-modal"]`).simulate('click', { handleModal: fn => fn });
    expect(buttonClick.find('#edited-modal').exists()).toBe(true);
  }); 
  
});