import React from "react";
import { mount } from "enzyme";
import CounterContainer from "./CounterContainer";
import configureMockStore from "redux-mock-store";
import * as counterActions from "../store/modules/counter";

describe("CounterContainer", () => {
  let component = null;
  let buttons = null;
  const mockStore = configureMockStore();

  // create mock store for data
  let store = mockStore({
    counter: {
      number: 0
    }
  });

  it("renders properly", () => {
    const context = { store };
    component = mount(<CounterContainer />, { context });
    // or component = mount(<CounterContainer store={store} />);
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("dispatches INCREASE action", () => {
    component
      .find("button")
      .at(0)
      .simulate("click");
    expect(store.getActions()[0]).toEqual(counterActions.increase());
  });

  it("dispatches DECREASE action", () => {
    component
      .find("button")
      .at(1)
      .simulate("click");
    expect(store.getActions()[1]).toEqual(counterActions.decrease());
    console.log(store.getActions());
  });
});
