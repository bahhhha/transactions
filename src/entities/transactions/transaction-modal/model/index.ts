import { Transaction } from "../../../../shared/interfaces/transactions";

export interface IProps {
  transaction: Transaction;
  opened: boolean;
  onClose: () => void;
}
