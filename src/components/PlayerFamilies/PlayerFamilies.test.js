import React from "react";
import { mount } from "enzyme";
import PlayerFamilies from "./PlayerFamilies";

describe("[Component]: PlayerFamilies:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<PlayerFamilies familyImages={[]} />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
