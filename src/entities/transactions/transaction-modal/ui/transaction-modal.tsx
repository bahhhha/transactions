import { Button, Modal } from "@mantine/core";
import { IProps } from "../model";
import { useTranslation } from "react-i18next";
import { TextWithLabel } from "./components/text-with-label";
import { convertToCSV } from "../../../../utils/convert-to-csv";

export const TransactionModal = ({
  transaction,
  opened,
  onClose,
}: IProps): JSX.Element => {
  const {
    amount,
    date,
    card,
    successful,
    currency,
    type,
    client,
    accountType,
    details,
    name,
    supervisor,
    transactionId,
  } = transaction;
  const { t } = useTranslation("transaction");
  const download = () => {
    const csv = convertToCSV([
      {
        date: date,
        successful: successful,
        type: type,
        accountType: accountType,
        card: card,
        amount: `${amount} ${currency}`,
        clientName: `${client.firstName} ${client.lastName}`,
        clientEmail: client.userEmail,
        supervisorName: `${supervisor.firstName} ${supervisor.lastName}`,
        supervisorEmail: supervisor.userEmail,
        serviceName: name,
        serviceDetails: details,
      },
    ]);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${transactionId}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      size="lg"
      centered
      title={`${t("title")} ${transactionId}`}
    >
      <div className="flex flex-col w-full p-4 text-xs">
        <div className="flex justify-between py-2 border-b">
          <TextWithLabel
            label={t("date")}
            text={new Date(date).toLocaleString()}
          />
          <TextWithLabel
            label={t("status")}
            text={successful ? t("success") : t("error")}
            textClassNames={successful ? "text-green-400" : "text-red-400"}
          />
        </div>
        <div className="flex justify-between py-2 border-b">
          <TextWithLabel label={t("type")} text={type} />
          <TextWithLabel label={t("accountType")} text={accountType} />
        </div>
        <div className="flex justify-between py-2 border-b">
          <TextWithLabel label={t("card")} text={card} />
          <TextWithLabel label={t("amount")} text={`${amount} ${currency}`} />
        </div>
        <div className="flex flex-col md:flex-row justify-between py-4 border-b">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{t("client")}</p>
            <TextWithLabel
              label={t("clientName")}
              text={`${client.firstName} ${client.lastName}`}
            />
            <TextWithLabel label={t("clientEmail")} text={client.userEmail} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{t("supervisor")}</p>
            <TextWithLabel
              label={t("supervisorName")}
              text={`${supervisor.firstName} ${supervisor.lastName}`}
            />
            <TextWithLabel
              label={t("supervisorEmail")}
              text={supervisor.userEmail}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4 border-b">
          <TextWithLabel label={t("serviceName")} text={name} />
          <TextWithLabel label={t("serviceDetails")} text={details} />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={download}
          className="w-fit bg-blue-500 hover:bg-blue-400 duration-150"
        >
          {t("download")}
        </Button>
      </div>
    </Modal>
  );
};
