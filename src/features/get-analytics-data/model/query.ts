import { createQuery } from "@farfetched/core";
import { TransactionsApi } from "../../../shared/api";
import { toast } from "react-toastify";

const fetchRawData = createQuery({
  name: "fetchRawData",
  handler: async () => {
    try {
      const response = await TransactionsApi.getRawData();
      return response;
    } catch (error) {
      console.log(error);
      toast.error(error as string);
    }
  },
});

export { fetchRawData };
