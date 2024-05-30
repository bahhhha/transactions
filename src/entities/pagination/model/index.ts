import { createEvent, createStore, sample } from "effector";

const $page = createStore(1);
const $perPage = createStore(8);

const setPage = createEvent<number>();
const setPerPage = createEvent<number>();

sample({
  source: setPage,
  target: $page,
});

sample({
  source: setPerPage,
  target: $perPage,
});

export { $page, $perPage, setPage, setPerPage };
