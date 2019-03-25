import React from "react";
import { mount } from "enzyme";
import Player from "./Player";
import familiesLogo from "../../data/img/families/index.js";

describe("[Component]: Player:", () => {
  let wrapper;
  const familiesLogoLength = Object.values(familiesLogo).length;

  beforeEach(() => {
    wrapper = mount(<Player familiesLogo={familiesLogo} />);
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Renders a selector to add families", () => {
    test("renders without crashing", () => {
      expect(wrapper.find(".family-selector")).toHaveLength(1);
    });
    test("renders as many options as family logo entries are", () => {
      expect(
        wrapper.find(".family-selector").find(".family-selector--option")
      ).toHaveLength(familiesLogoLength);
    });
    test("selecting an option adds and renders the relative family icon to the player's card up to 3", () => {
      const maxFamilies = 3;
      expect(wrapper.find(".family-image")).toHaveLength(0);
      ["logos", "dis", "sombras", "brobnar"].forEach((familyName, iter) => {
        wrapper.find(".family-selector").simulate("change", {
          target: { value: familyName }
        });
        if (iter + 1 <= maxFamilies)
          expect(wrapper.find(".family-image")).toHaveLength(iter + 1);
        else expect(wrapper.find(".family-image")).toHaveLength(iter);
      });
    });
  });

  describe("Renders a key counter", () => {
    test("renders without crashing without rendered keys and with a button to forge the key", () => {
      expect(wrapper.find(".keys-counter.counter")).toHaveLength(1);
      expect(
        wrapper
          .find(".keys-counter.counter")
          .find(".keys-number")
          .find(".key")
      ).toHaveLength(0);
      expect(
        wrapper.find(".keys-counter.counter").find(".add-key")
      ).toHaveLength(1);
    });
    test("adds a key if the counter is higher than 6", () => {
      const forgeKeyIndex = 6;
      expect(wrapper.find(".fragments-count").props().count).toBe(0);
      expect(wrapper.find(".fragments-count").props().children).toBe(
        `Key Fragments: 0`
      );
      for (var i = 1; i <= 6; i++) {
        wrapper.find("Counter.increment").simulate("click");
        wrapper.find(".add-key").simulate("click");
        if (i < forgeKeyIndex) {
          expect(wrapper.find(".fragments-count").props().count).toBe(i);
          expect(wrapper.find(".fragments-count").props().children).toEqual(
            `Key Fragments: ${i}`
          );
          expect(
            wrapper
              .find(".keys-counter.counter")
              .find(".keys-number")
              .find(".key")
          ).toHaveLength(0);
        } else {
          expect(wrapper.find(".fragments-count").props().count).toBe(0);
          expect(wrapper.find(".fragments-count").props().children).toEqual(
            `Key Fragments: ${0}`
          );
          expect(
            wrapper
              .find(".keys-counter.counter")
              .find(".keys-number")
              .find(".key")
          ).toHaveLength(1);
        }
      }
    });
    const maxKeys = 3;
    test(`doesn't add more than ${maxKeys} keys`, () => {
      for (var i = 1; i <= 30; i++) {
        wrapper.find("Counter.increment").simulate("click");
      }
      for (var i = 1; i <= 6; i++) {
        wrapper.find(".add-key").simulate("click");
        if (i <= maxKeys)
          expect(
            wrapper
              .find(".keys-counter.counter")
              .find(".keys-number")
              .find(".key")
          ).toHaveLength(i);
        else
          expect(
            wrapper
              .find(".keys-counter.counter")
              .find(".keys-number")
              .find(".key")
          ).toHaveLength(maxKeys);
      }
    });
    const defaulatIncreaseNumber = 1;
    const initialKeycost = 6;
    test(`has the ability to increase the value by ${defaulatIncreaseNumber} when clicking + `, () => {
      expect(wrapper.find("Counter.increment-keycost").props().count).toBe(initialKeycost);
      for (var i = 1; i <= 6; i++) {
        wrapper.find("Counter.increment-keycost").simulate("click");
        expect(wrapper.find("Counter.increment-keycost").props().count).toBe(
          i * defaulatIncreaseNumber + initialKeycost
        );
      }
    });

    test(`has the ability to decrease the value by ${defaulatIncreaseNumber} when clicking + `, () => {
      expect(wrapper.find("Counter.decrement-keycost").props().count).toBe(initialKeycost);
      for (var i = 1; i <= 6; i++) {
        wrapper.find("Counter.decrement-keycost").simulate("click");
        expect(wrapper.find("Counter.decrement-keycost").props().count).toBe(
          -i * defaulatIncreaseNumber + initialKeycost
        );
      }
    });
  });

  describe("Renders a Fragments counter with the ability to increase and decrease and display the value", () => {
    test("renders all necessary elements without crashing", () => {
      expect(wrapper.find(".fragments-counter")).toHaveLength(1);
      expect(wrapper.find("Counter.decrement")).toHaveLength(1);
      expect(wrapper.find("Counter.increment")).toHaveLength(1);
      expect(wrapper.find(".fragments-count")).toHaveLength(1);
    });

    const defaulatIncreaseNumber = 1;
    test(`has the ability to increase the value by ${defaulatIncreaseNumber} when clicking + `, () => {
      expect(wrapper.find(".fragments-count").props().count).toBe(0);
      for (var i = 1; i <= 6; i++) {
        wrapper.find("Counter.increment").simulate("click");
        expect(wrapper.find(".fragments-count").props().count).toBe(
          i * defaulatIncreaseNumber
        );
      }
    });

    test(`has the ability to decrease the value by ${defaulatIncreaseNumber} when clicking + `, () => {
      expect(wrapper.find(".fragments-count").props().count).toBe(0);
      for (var i = 1; i <= 6; i++) {
        wrapper.find("Counter.decrement").simulate("click");
        expect(wrapper.find(".fragments-count").props().count).toBe(
          -i * defaulatIncreaseNumber
        );
      }
    });
  });
});
