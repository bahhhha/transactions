interface User {
  userId: string;
  firstName: string;
  lastName: string;
  userEmail: string;
}

export interface Transaction {
  card: string;
  transactionId: string;
  date: string;
  amount: string;
  currency: string;
  type: string;
  name: string;
  details: string;
  successful: boolean;
  accountType: string;
  supervisor: User;
  client: User;
  id: string;
}

export interface Pagination {
  total: number;
  pages_count: number;
}

export interface RawData {
  count: number;
  items: Transaction[];
}
