import React from "react";
import { mount } from "enzyme";
import KeyForger from "./KeyForger";

describe("[Component]: KeyForger:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<KeyForger />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  // describe("Rerders desired components:", () => {
  //   test("renders header with App-header className if none is provided", () => {
  //     expect(wrapper.find("header").props().className).toBe("App-header");
  //   });
  // });
});
