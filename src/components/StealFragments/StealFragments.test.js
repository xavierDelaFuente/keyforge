import React from "react";
import { mount } from "enzyme";
import StealFragments from "./StealFragments";

describe("[Component]: StealFragments:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<StealFragments />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
