import { Radio } from "@mantine/core";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { $type, setType } from "../model";

export const TypeFilter = (): JSX.Element => {
  const { t } = useTranslation("controls");
  const [selectedType, changeStatus] = useUnit([$type, setType]);
  const statuses = [
    {
      value: "all",
      label: t("typeSelect.all"),
    },
    {
      value: "success",
      label: t("typeSelect.success"),
    },
    {
      value: "failed",
      label: t("typeSelect.failed"),
    },
    {
      value: "invoice",
      label: t("typeSelect.invoice"),
    },
    {
      value: "deposit",
      label: t("typeSelect.deposit"),
    },
    {
      value: "payment",
      label: t("typeSelect.payment"),
    },
    {
      value: "withdrawal",
      label: t("typeSelect.withdrawal"),
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
      {statuses.map((status, index) => (
        <div key={index} onClick={() => changeStatus(status.value)}>
          <Radio
            size="xs"
            checked={status.value === selectedType}
            label={status.label}
            readOnly
            color="gray"
            className={`text-xs px-2 py-1 rounded-md min-w-fit shadow-md border border-gray-300 hover:bg-gray-100 ${
              status.value === selectedType ? "bg-gray-200" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};
