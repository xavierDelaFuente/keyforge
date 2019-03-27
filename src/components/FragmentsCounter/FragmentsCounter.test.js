import React from "react";
import { mount } from "enzyme";
import FragmentsCounter from "./FragmentsCounter";

describe("[Component]: FragmentsCounter:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<FragmentsCounter />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
