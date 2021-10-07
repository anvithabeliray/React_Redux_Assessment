import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import valuesReducer from '../../src_code/reducers/valuesReducer' ;
import ACTION_TYPES from '../../src_code/actions/actionTypes';

const initialState = { 
    result: [], 
    error: null, 
  };  
describe('valuesReducer component', () => {
    test("renders" , ()=>{
      const wrapper = shallow(<valuesReducer />); 
      expect(wrapper.exists()).toBe(true);
    }); 
      
    it('handles FETCH_SUCCESS',()=>{
      expect(valuesReducer(initialState,{
        type:ACTION_TYPES.FETCH_SUCCESS,
        payload:['charmeleon'],          
      })).toEqual({ ...initialState, result: ['charmeleon'], })
    })

    it('handles FETCH_FAIL',()=>{
      expect(valuesReducer(initialState,{
        type:ACTION_TYPES.FETCH_FAIL,         
        payload: null, 
      })).toEqual({ ...initialState, error:null, })
    })       
})
   
  
