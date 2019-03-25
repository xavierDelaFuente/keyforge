import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

describe("[Component]: Header:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders header with App-header className if none is provided", () => {
      expect(wrapper.find("header").props().className).toBe("App-header");
    });

    test("renders a className if provided", () => {
      const testClass = "test-class";
      let caseWrapper = mount(<Header className={testClass} />);
      expect(caseWrapper.find("header").props().className).toBe(testClass);
    });

    test("renders an image with keyforge logo", () => {
      expect(wrapper.find(".App-logo").props().src).toBe(
        "Keyforge-calendar.png"
      );
    });
  });
});
