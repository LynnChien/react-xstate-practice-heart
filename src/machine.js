import { Machine } from "xstate";

export const BTN_STATES = {
  HEART: "HEART",
  THUMB: "THUMB"
};

export const BTN_EVENTS = {
  CLICK: "CLICK"
};

const btnMachine = Machine({
  initial: BTN_STATES.HEART,
  states: {
    [BTN_STATES.HEART]: {
      on: {
        [BTN_EVENTS.CLICK]: BTN_STATES.THUMB
      }
    },
    [BTN_STATES.THUMB]: {
      on: {
        [BTN_EVENTS.CLICK]: BTN_STATES.HEART
      }
    }
  }
});

export default btnMachine;
