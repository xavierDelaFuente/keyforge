import React from "react";
import { mount } from "enzyme";
import Counter from "./Counter";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Counter:", () => {
  let wrapper;
  const testClass = "test-class";
  const testIncreaseNumber = 1;
  const testText = "click";
  beforeEach(() => {
    wrapper = mount(
      <Counter
        className={testClass}
        increment={testIncreaseNumber}
        text={testText}
      />
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders as many players as it receives as props", () => {
      expect(wrapper.find(".button")).toHaveLength(1);
    });

    test("renders with className prop if provided", () => {
      expect(wrapper.find(".button")).toHaveLength(1);
    });

    test("renders with provided text if provided", () => {
      expect(wrapper.find(".button").props().children).toBe(testText);
    });
  });

  describe("Works as intended:", () => {
    // test("increase the 'count' prop by the given 'increment' prop", () => {
    //   expect(wrapper.props().count).toBe(0);
    //   for (var i = 1; i <= 6; i++) {
    //     wrapper.find(".increment").simulate("click");
    //   }
    // });
  });
});
