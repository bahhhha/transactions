import { createEvent, createStore, sample } from "effector";

const $sortBy = createStore<string>("date");

const setSortBy = createEvent<string>();

sample({
  source: setSortBy,
  target: $sortBy,
});

export { $sortBy, setSortBy };
