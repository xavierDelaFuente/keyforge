import React from "react";
import { mount } from "enzyme";
import Players from "./Players";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Players:", () => {
  let wrapper;
  const players = ["Magician the 1st", "Magician the 2nd"];
  beforeEach(() => {
    wrapper = mount(<Players players={players} />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
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
