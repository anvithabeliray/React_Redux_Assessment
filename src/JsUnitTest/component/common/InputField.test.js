import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import InputField from '../../../src_code/components/common/InputField';

describe('render <InputField /> component', () => {
  it('should render an  input tag', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});