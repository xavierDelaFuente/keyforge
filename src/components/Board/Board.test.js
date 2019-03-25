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
      const welcomeMessage = " Players cristals and keys counter ";
      expect(wrapper.find(".players-board-title").props().children).toEqual(
        welcomeMessage
      );
    });

    test("renders as many players as it receives as props", () => {
      expect(wrapper.find(".player-container")).toHaveLength(players.length);
    });

    test("renders a title for each player", () => {
      players.forEach((player, index) => {
        expect(
          wrapper
            .find(".player-title")
            .at(index)
            .props().children
        ).toEqual(player);
      });
    });
  });
});
