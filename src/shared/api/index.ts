import axios from "axios";
import { GetTransactionsParams } from "../interfaces/api";

const api = axios.create({
  baseURL: "https://665717a39f970b3b36c7ea2d.mockapi.io/recruiting-task/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const TransactionsApi = {
  getTransactions: async (params: GetTransactionsParams) => {
    const payload = {
      page: params.page.toString(),
      limit: params.limit.toString(),
      sortBy: params.sortBy,
    };

    const urlParams = new URLSearchParams(payload);

    if (params.type !== "all") {
      if (params.type === "success") {
        urlParams.append("filter", "true");
      } else if (params.type === "failed") {
        urlParams.append("filter", "false");
      } else urlParams.append("filter", params.type);
    }

    if (params.search && params.search !== "")
      urlParams.append("search", params.search);

    const queryString = urlParams.toString();

    try {
      const response = await api.get(`/transactions?${queryString}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getRawData: async () => {
    try {
      const response = await api.get("/transactions");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
