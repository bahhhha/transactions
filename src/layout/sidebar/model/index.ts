import { createEvent, createStore, sample } from "effector";

export enum Tab {
  HOME = "home",
  TRANSACTIONS = "transactions",
  ANALYTICS = "analytics",
}

const $activeTab = createStore<Tab>(Tab.HOME);

const setActiveTab = createEvent<Tab>();

sample({
  clock: setActiveTab,
  target: $activeTab,
});

export { $activeTab, setActiveTab };
