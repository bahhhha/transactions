import { Transaction } from "../shared/interfaces/transactions";

export function transformToPieChartData(
  transactions: Transaction[]
): Record<string, number> {
  return transactions.reduce((acc, transaction) => {
    acc[transaction.type] = (acc[transaction.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export function transformToBarChartData(
  transactions: Transaction[]
): { name: string; value: number }[] {
  const successCounts = transactions.reduce((acc, transaction) => {
    const key = transaction.successful ? "Successful" : "Unsuccessful";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(successCounts).map(([name, value]) => ({
    name,
    value,
  }));
}
