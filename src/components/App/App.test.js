import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: App:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders Header", () => {
      expect(wrapper.find("Header")).toHaveLength(1);
    });

    test("renders a Link to the Board", () => {
      expect(wrapper.find("Link").props().to).toBe("/Board");
    });

    test("renders a welcome message", () => {
      const welcomeMessage =
        "Welcome to Keyforge. An App for easier keeping count of the game.";
      expect(wrapper.find(".welcome-message").props().children).toEqual(
        welcomeMessage
      );
    });
  });
});
