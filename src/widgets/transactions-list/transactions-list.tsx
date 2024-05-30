import { useUnit } from "effector-react";
import { $transactions } from "../../features/get-transactions/model";
import { TransactionCard } from "../../entities/transactions/transaction-card";
import { motion } from "framer-motion";
import { Pagination } from "../../entities/pagination/ui/pagination";

export const TransactionsList = (): JSX.Element => {
  const transactions = useUnit($transactions);
  return (
    <div className="w-full flex flex-col md:gap-12 gap-8 items-center">
      {transactions && transactions.length > 0 ? (
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {transactions.map((transaction) => {
              return (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TransactionCard transaction={transaction} />
                </motion.div>
              );
            })}
          </div>
          <div className="my-8">
            <Pagination />
          </div>
        </div>
      ) : (
        <div>No transactions</div>
      )}
    </div>
  );
};
