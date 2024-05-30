import { useUnit } from "effector-react";
import { PieChart } from "../../entities/charts/pie-chart/ui/pie-chart";
import { $rawData } from "../../features/get-analytics-data/model";
import { useTranslation } from "react-i18next";
import { BarChart } from "../../entities/charts/bar-chart/ui/bar-chart";
import { motion } from "framer-motion";

export const Charts = (): JSX.Element => {
  const { t } = useTranslation("analytics");
  const rawData = useUnit($rawData);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {rawData && rawData?.items?.length > 0 && (
        <div className="flex md:flex-row md:items-start flex-col">
          <div className="w-[20rem] bg-white rounded-md m-4 shadow-md">
            <h1 className="text-md font-semibold p-4">
              {t("byTransactionType")}
            </h1>
            <PieChart data={rawData.items} />
          </div>
          <div className="w-[20rem] bg-white rounded-md m-4 shadow-md">
            <h1 className="text-md font-semibold p-4">{t("successRate")}</h1>
            <BarChart data={rawData.items} />
          </div>
        </div>
      )}
    </motion.div>
  );
};
