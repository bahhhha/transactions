import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
  Pagination,
  Transaction,
} from "../../../shared/interfaces/transactions";
import { fetchTransactions } from "./query";

import { $page, $perPage } from "../../../entities/pagination/model";
import { $sortBy } from "../../../entities/transactions/sort";
import { $type } from "../../../entities/type-filter";
import { $search } from "../../../entities/search-bar";

const TransactionsGate = createGate();

const triggerSearch = createEvent<void>();
const $transactions = createStore<Transaction[]>([]);

const $pagination = createStore<Pagination>({
  total: 0,
  pages_count: 0,
});

sample({
  clock: [
    triggerSearch,
    TransactionsGate.open,
    $page.updates,
    $perPage.updates,
    $sortBy.updates,
    $type.updates,
  ],
  filter: () => !fetchTransactions.$pending.getState(),
  fn: () => {
    return {
      search: $search.getState(),
      page: $page.getState(),
      sortBy: $sortBy.getState(),
      type: $type.getState(),
      limit: $perPage.getState(),
    };
  },
  target: fetchTransactions.start,
});

sample({
  clock: fetchTransactions.finished.success,
  source: fetchTransactions.$data,
  fn: (response) => {
    return response ? response.items : ([] as Transaction[]);
  },
  target: $transactions,
});

sample({
  clock: fetchTransactions.finished.success,
  source: fetchTransactions.$data,
  fn: (response) => {
    return response
      ? {
          total: response.count,
          pages_count: Math.ceil(response.count / $perPage.getState()),
        }
      : ({} as Pagination);
  },
  target: $pagination,
});

export {
  TransactionsGate,
  fetchTransactions,
  triggerSearch,
  $transactions,
  $pagination,
};
