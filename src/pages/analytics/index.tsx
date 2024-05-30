import { useGate } from "effector-react";
import { lazy } from "react";
import { AnalyticsGate } from "../../features/get-analytics-data/model";

const AnalyticsPage = lazy(() => import("../../views/analytics"));

const Analytics = () => {
  useGate(AnalyticsGate);
  return (
    <div className="w-full h-full">
      <AnalyticsPage />
    </div>
  );
};

export default Analytics;
