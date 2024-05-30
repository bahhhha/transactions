import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Transaction } from "../../../../shared/interfaces/transactions";
import { transformToBarChartData } from "../../../../utils/charts-helpers";

export const BarChart = ({ data }: { data: Transaction[] }) => {
  const dataTransformed = transformToBarChartData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart data={dataTransformed}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#2345FF
"
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
