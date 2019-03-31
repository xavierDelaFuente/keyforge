import React from "react";
import { mount } from "enzyme";
import FamilySelector from "./FamilySelector";
import familiesLogo from "../../data/img/families/index.js";

describe("[Component]: FamilySelector:", () => {
  let wrapper;
  const testFamilyImages = [];
  beforeEach(() => {
    wrapper = mount(
      <FamilySelector
        familiesLogo={familiesLogo}
        familyImages={testFamilyImages}
      />
    );
  });

  describe("Rerders desired components:", () => {
    test("renders without crashing", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("renders an element to select between families and the list of all families", () => {
      expect(wrapper.find(".button.family-selector")).toHaveLength(1);
      expect(wrapper.find(".family-selector--option")).toHaveLength(
        Object.keys(familiesLogo).length
      );
    });
  });
  describe("Behaves as expected:", () => {
    test("has a familyImages array as a prop", () => {
      expect(wrapper.props().familyImages).toBe(testFamilyImages);
    });
    // test("selecting a family-selector--option adds one familiesLogo to familyImages prop", () => {
    //   expect(wrapper.props().familyImages).toBe(testFamilyImages);
    //   const familyOption = 'dis';
    //   wrapper.find(`.button.family-selector`).simulate('change', {
    //     target: {
    //       value: "dis"
    //     }
    //   });
    //   wrapper.update();
    //   expect(wrapper.props().familyImages).toBe([...testFamilyImages, familyOption]);
    // });
  });
});
