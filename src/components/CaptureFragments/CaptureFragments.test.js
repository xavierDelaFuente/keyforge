import React from "react";
import { mount } from "enzyme";
import CaptureFragments from "./CaptureFragments";

describe("[Component]: CaptureFragments:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CaptureFragments count={0} setCount={jest.fn()} />);
  });

  describe("Rerders desired components:", () => {
    test("renders without crashing", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("renders a 2 Counters to control the capture ratio and a button to capture Fragments", () => {
      expect(wrapper.find("Counter.decrement-capturecost")).toHaveLength(1);
      expect(wrapper.find(".capture-fragments__button")).toHaveLength(1);
      expect(wrapper.find("Counter.increment-capturecost")).toHaveLength(1);
    });
  });
  describe("Behaves as expected:", () => {
    const times = 10;
    test("adds 1 to the counter each time .increment-capturecost is clicked", () => {
      for (var i = 0; i < times; i++) {
        expect(
          wrapper.find("Counter.increment-capturecost").props().count
        ).toBe(i);
        wrapper.find("Counter.increment-capturecost").simulate("click");
        expect(
          wrapper.find("Counter.increment-capturecost").props().count
        ).toBe(i + 1);
      }
    });
    test("substract 1 to the counter each time .decrement-capturecost is clicked", () => {
      for (var i = 0; i < times; i++) {
        expect(
          wrapper.find("Counter.decrement-capturecost").props().count
        ).toBe(i === 0 ? 0 : -i);
        wrapper.find("Counter.decrement-capturecost").simulate("click");
        expect(
          wrapper.find("Counter.decrement-capturecost").props().count
        ).toBe(-(i + 1));
      }
    });
    {
      /*describe("captures the 'capture' amount of fragments if ther's any", () => {
      test("captures the 'capture' amount of fragments ", () => {
        for(var i=0; i<times;i++){
          expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(i === 0 ? 0 : -i);
          wrapper.find("Counter.increment-capturecost").simulate('click')
          expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(-(i+1));
        }
        wrapper.find(".capture-fragments__button").simulate('click')
        expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(times-capture);
      });

      test("captures only the 'fragments' amount of fragments if there are less than capture", () => {
        for(var i=0; i<times;i++){
          expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(i === 0 ? 0 : -i);
          wrapper.find("Counter.increment-capturecost").simulate('click')
          expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(-(i+1));
        }
        wrapper.find(".capture-fragments__button").simulate('click')
        const capture = 0;
        expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(times);
      });

      test("doesn't capture if there is no fragments", () => {
        wrapper.find("Counter.increment-capturecost").simulate('click')
        wrapper.find(".capture-fragments__button").simulate('click')
        const capture = 0;
        expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(0);
      });
      test("doesn't capture if there is no fragments", () => {
        wrapper.setProps({ count: 2 })
        wrapper.find("Counter.increment-capturecost").simulate('click')
        wrapper.find(".capture-fragments__button").simulate('click')
        expect(wrapper.find("Counter.increment-capturecost").props().count).toBe(0);
      });
    });*/
    }
  });
});
