import React from "react";
import { mount } from "enzyme";
import FragmentsCounter from "./FragmentsCounter";

describe("[Component]: FragmentsCounter:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<FragmentsCounter count={0} setCount={jest.fn()} />);
  });

  describe("Rerders desired components:", () => {
    test("renders without crashing", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("renders 2 counters to manipulate the Fragments count and the Fragments count", () => {
      expect(wrapper.find(".fragments-counter")).toHaveLength(1);
      expect(wrapper.find("Counter.decrement")).toHaveLength(1);
      expect(wrapper.find("Counter.increment")).toHaveLength(1);
      expect(wrapper.find(".fragments-count")).toHaveLength(1);
    });
  });
  // describe("Behaves as expected:", () => {
  // 	const times = 10;
  //   test("adds 1 to the counter each time .increment is clicked", () => {
  //     for(var i=0; i< times;i++){
  //       expect(wrapper.find("Counter.increment").props().count).toBe(i);
  //       wrapper.find("Counter.increment").simulate('click')
  //       wrapper.update()
  //       expect(wrapper.find("Counter.increment").props().count).toBe(i+1);
  //     }
  //   });
  //   test("substract 1 to the counter each time .decrement is clicked", () => {
  //     for(var i=0; i< times;i++){
  //       expect(wrapper.find("Counter.decrement").props().count).toBe(i === 0 ? 0 : -i);
  //       wrapper.find("Counter.decrement").simulate('click')
  //       wrapper.update()
  //       expect(wrapper.find("Counter.decrement").props().count).toBe(-(i+1));
  //     }
  //   });
  // });
});
