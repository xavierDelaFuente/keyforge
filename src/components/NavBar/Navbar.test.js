import React from "react";
import { mount } from "enzyme";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Navbar:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/Board"]}>
        <Navbar />
      </MemoryRouter>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders a list of Links", () => {
      expect(wrapper.find("ul").find("Link").length).toBeGreaterThanOrEqual(1);
    });
    test("renders a Home Link with Home text", () => {
      const homeMessage = "Home";
      const src = "/";
      expect(wrapper.find("Link.home").props().children).toEqual(homeMessage);
      expect(wrapper.find("Link.home").props().to).toEqual(src);
    });
  });
});
