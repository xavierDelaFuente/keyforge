import React from "react";
import { mount } from "enzyme";
import PlayerFamilies from "./PlayerFamilies";

describe("[Component]: PlayerFamilies:", () => {
  let wrapper;
  let testFamilyImages = [];

  beforeEach(() => {
    wrapper = mount(<PlayerFamilies familyImages={testFamilyImages} />);
  });

  describe("Rerders desired components:", () => {
    test("renders without crashing", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("renders a 2 Counters to control the capture ratio and a button to capture Fragments", () => {
      expect(wrapper.find(".player-families")).toHaveLength(1);
      expect(wrapper.find(".family-image")).toHaveLength(
        testFamilyImages.length
      );
    });
  });
});
