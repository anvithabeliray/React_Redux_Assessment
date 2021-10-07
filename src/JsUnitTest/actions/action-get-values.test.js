import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({  adapter: new EnzymeAdapter(), });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();
import getAbilities from "../../src_code/actions/action-get-values";

describe("getAbilities actions", () => {

  it("dispatches getAbilities after a successfull API requests", () => {
    let response = { data: [{ name: "charmeleon" }, { name: "overgrow" }] };
    mock.onGet().reply(200, response);
    return store.dispatch(getAbilities("charmeleon")).then(() => {
      let actionsDispatched = store.getActions();
      expect(actionsDispatched.length > 0).toBe(true);
      expect(actionsDispatched.length).toEqual(1);
      expect(actionsDispatched[0].type).toEqual("FETCH_SUCCESS");
    });
  });

  it("dispatches getAbilities after a successfull API requests with empty data", () => {
    mock.onGet().reply(200, null);
    return store.dispatch(getAbilities("charmeleon")).then(() => {
      let actionsDispatched = store.getActions();
      expect(actionsDispatched.length > 0).toBe(true);
      expect(actionsDispatched[0].type).toEqual("FETCH_SUCCESS");
    });
  });

  it("dispatches SET_DROPDOWN_VALUES_ERROR after a FAILED API requests", () => {
    mock.onGet().reply(400, "error");
    return store.dispatch(getAbilities()).catch(() => {
      let actionsDispatched = store.getActions();
      expect(actionsDispatched[0].type).toEqual("FETCH_FAIL");
    });
  });
  
});