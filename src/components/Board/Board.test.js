import React from "react";
import { mount } from "enzyme";
import Board from "./Board";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Board:", () => {
  let wrapper;
  const players = ["Magician the 1st", "Magician the 2nd"];
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/Board"]}>
        <Board />
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

    test("renders a title for the board", () => {
      const welcomeMessage = "Players cristals and keys counter";
      expect(wrapper.find(".players-board-title").props().children).toBe(
        welcomeMessage
      );
    });

    test("renders Players", () => {
      expect(wrapper.find("Players")).toHaveLength(1);
    });
  });
});
