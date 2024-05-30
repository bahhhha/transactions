import { useGate } from "effector-react";
import { lazy } from "react";
import { TransactionsGate } from "../../features/get-transactions/model";

const TransactionsPage = lazy(() => import("../../views/transactions"));

const Transactions = () => {
  useGate(TransactionsGate);
  return (
    <div className="w-full h-full">
      <TransactionsPage />
    </div>
  );
};

export default Transactions;
