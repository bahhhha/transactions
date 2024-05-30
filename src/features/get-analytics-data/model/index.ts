import { createStore, sample } from "effector";
import { fetchRawData } from "./query";
import { createGate } from "effector-react";
import { RawData } from "../../../shared/interfaces/transactions";

const AnalyticsGate = createGate();

const $rawData = createStore<RawData>({} as RawData);

sample({
  clock: AnalyticsGate.open,
  target: fetchRawData.start,
});

sample({
  clock: fetchRawData.finished.success,
  source: fetchRawData.$data,
  fn: (response) => {
    return response ? response : ({} as RawData);
  },
  target: $rawData,
});

export { AnalyticsGate, $rawData };
