import { Controls } from "../../widgets/controls/controls";
import { TransactionsList } from "../../widgets/transactions-list/transactions-list";

const TransactionsPage = () => {
  return (
    <div className="p-8 h-full py-8 flex flex-col gap-4 items-center">
      <Controls />
      <TransactionsList />
    </div>
  );
};

export default TransactionsPage;
