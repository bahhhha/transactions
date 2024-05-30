import { SortAsc } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Select } from "@mantine/core";
import { $sortBy, setSortBy } from "../model";
import { useUnit } from "effector-react";

export const SortBy = (): JSX.Element => {
  const { t } = useTranslation("controls");
  const [sortBy, changeSortBy] = useUnit([$sortBy, setSortBy]);

  const sortOptions = [
    { value: "date", label: t("sort.date") },
    { value: "amount", label: t("sort.amount") },
    { value: "category", label: t("sort.category") },
  ];

  return (
    <div className="flex items-center gap-2">
      <p className="md:text-sm text-xs text-gray-600 font-regular">
        {t("sort.sortBy")}
      </p>
      <Select
        className="border md:w-32 w-32 text-xs shadow-md"
        leftSection={<SortAsc size={14} />}
        value={sortBy}
        onChange={(value) => changeSortBy(value as string)}
        data={sortOptions}
      />
    </div>
  );
};
