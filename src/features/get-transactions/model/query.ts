import { createQuery } from "@farfetched/core";
import { TransactionsApi } from "../../../shared/api";
import { GetTransactionsParams } from "../../../shared/interfaces/api";
import { toast } from "react-toastify";

const fetchTransactions = createQuery({
  name: "fetchTransactions",
  handler: async (params: GetTransactionsParams) => {
    try {
      const response = await TransactionsApi.getTransactions(params);
      return response;
    } catch (error) {
      console.log(error);
      toast.error(error as string);
    }
  },
});

export { fetchTransactions };
