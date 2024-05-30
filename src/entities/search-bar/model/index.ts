import { createEvent, createStore, sample } from "effector";

const $search = createStore<string>("");

const setSearch = createEvent<string>();

sample({
  source: setSearch,
  target: $search,
});

export { $search, setSearch };
