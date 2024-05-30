import { useTranslation } from "react-i18next";
import { IProps } from "../model";
import { lazy } from "react";
import { useDisclosure } from "@mantine/hooks";
const TransactionModal = lazy(() => import("../../transaction-modal/"));

export const TransactionCard = ({ transaction }: IProps): JSX.Element => {
  const { t } = useTranslation("transaction");
  const {
    amount,
    date,
    card,
    successful,
    currency,
    type,
    client: { firstName, lastName },
  } = transaction;
  const [isOpen, { open, close }] = useDisclosure();
  return (
    <div className="w-full">
      <div
        onClick={open}
        className="w-full cursor-pointer bg-white hover:bg-gray-100 duration-150 px-4 border text-sm shadow-lg rounded-md flex flex-col"
      >
        <div className="flex justify-between items-center py-2 border-b">
          <p className="text-xs">{new Date(date).toLocaleString()}</p>
          <p className="font-normal text-xs text-gray-400">
            {type.toUpperCase()}
          </p>
        </div>
        <div className="flex w-full justify-between py-2 border-b">
          <p className="italic text-gray-400">{card}</p>
          <div className="flex gap-1">
            <p className="font-medium">{amount}</p>
            <p>{currency}</p>
          </div>
        </div>
        <div className="flex w-full justify-between py-2">
          <p className="text-xs text-gray-500">
            {firstName} {lastName}
          </p>
          <div className="font-semibold text-xs">
            {successful ? (
              <p className="text-green-400">{t("success")}</p>
            ) : (
              <p className="text-red-400">{t("error")}</p>
            )}
          </div>
        </div>
      </div>
      <TransactionModal
        opened={isOpen}
        onClose={close}
        transaction={transaction}
      />
    </div>
  );
};
