import React from "react";
import ReactDOM from "react-dom";
import store from '../src_code/store/store';
import { Provider } from 'react-redux';
import App from '../App';
 
jest.mock("react-dom", () => ({ render: jest.fn() }));
 
describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index");
    expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}>
           <App/>
        </Provider>, div);
    });
});