import React from "react";
import { mount } from "enzyme";
import CaptureFragments from "./CaptureFragments";

describe("[Component]: CaptureFragments:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CaptureFragments />);
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
