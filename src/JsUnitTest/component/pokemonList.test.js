import Enzyme, { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
const middleware = [thunk];
const mockStore = configureStore(middleware);
Enzyme.configure({ adapter: new Adapter() });
const store = mockStore();
import PokemonList from "../../src_code/components/pokemonList";

describe("Select Buttons for displaying Pokemon and abilities",()=>{    
    let props = {        
        Content: {         
            heading: "Name - Abilities Selector",          
            drop1: 
            [ 
                {            
                    "ability":            
                    {            
                        "name": "charmeleon",          
                    }          
                }        
            ], 
        },       
        getAbilities: fn => fn,   
        setAbility: fn => fn,        
        error:true,    
    };  
    it('render the title', () => {        
        const wrapper = shallow(<PokemonList {...props}/>);        
        const para = wrapper.find('h1')   ;     
        expect(para).toHaveLength(1)  ;      
        expect(wrapper.find('h1')).toEqual({})    ;
    }); 
    it('should call setAbility method', () => {
        const values = {
            target:{
                item : ""
            }
        }
        const wrapper = shallow(<PokemonList {...props}/>);
        wrapper.instance().setAbility(values);
        expect(wrapper.find('setAbility')).toEqual({})
    });

    it('should call handleOnChange method',()=>{         
        const wrapper = shallow(<PokemonList {...props} />);     
        const para = wrapper.find(`[id="label1"]`).simulate('change', {  target: { values: "" } });              
        expect(para.find('#label1').exists()).toBe(true);          
    });
  
    it('renders common 1st dropdown ',()=>{         
        const wrapper = shallow(<PokemonList {...props}/>);     
        const para = wrapper.find(`label`).at(0);        
        para.simulate('change')        
        expect(wrapper.find('setAbility')).toHaveBeenCalled;          
    });
       
    it('renders common 2nd dropdown ',()=>{         
        const wrapper = shallow(<PokemonList {...props}/>);        
        const para = wrapper.find(`label`).at(1);            
        expect(para.exists()).toEqual(true);      
    });    
})



    