import { useTranslation } from "react-i18next";
import { Transaction } from "../../../../shared/interfaces/transactions";
import { transformToPieChartData } from "../../../../utils/charts-helpers";
import { COLORS, PieChartData } from "../model";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  TooltipProps,
} from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  const { t } = useTranslation("analytics");
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    const percent = payload[0].payload.percent;
    return (
      <div className="bg-white p-2 border border-gray-300 rounded">
        <p className="text-gray-800">{`${t(name ? name : "")}: ${value}`}</p>
        <p className="text-gray-500">{`${(percent * 100).toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

export const PieChart = ({ data }: { data: Transaction[] }): JSX.Element => {
  const transformedData: Record<string, number> = transformToPieChartData(data);
  const pieChartData: PieChartData[] = Object.entries(transformedData).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const dataWithPercentage = pieChartData.map((entry) => {
    const percent = entry.value / data.length;
    return {
      ...entry,
      percent,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Pie
          data={dataWithPercentage}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {pieChartData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
