import { createEvent, createStore, sample } from "effector";

const $type = createStore<string>("all");
const setType = createEvent<string>();

sample({
  source: setType,
  target: $type,
});

export { $type, setType };
