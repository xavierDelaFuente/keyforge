import React from "react";
import { mount } from "enzyme";
import FamilySelector from "./FamilySelector";
import familiesLogo from "../../data/img/families/index.js";

describe("[Component]: FamilySelector:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <FamilySelector familiesLogo={familiesLogo} familyImages={[]} />
    );
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
