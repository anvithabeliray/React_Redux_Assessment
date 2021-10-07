import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import ToDoList from "../../src_code/components/TodoList";

describe('<ToDoList />', () => {

    it('should render properly', () => {
        const wrapper = shallow(<ToDoList todoLists={[]}/>);
        expect(wrapper.exists()).toBe(true);
      });

      it('should test <TodoList> component with list of todos', () => {
        const wrapper = shallow(
          <ToDoList todoLists={['Reading Newspaper', 'Walking']} />
        );
        expect(wrapper.find('.items-list').exists()).toBe(true);
      });
}); 