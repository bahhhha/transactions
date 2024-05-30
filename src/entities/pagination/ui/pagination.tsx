import { $page, $perPage, setPage, setPerPage } from "../model";
import { $pagination } from "../../../features/get-transactions/model";
import { useUnit } from "effector-react";
import { NumberInput } from "@mantine/core";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { PaginationButton } from "../components/pagination-button";
import { useTranslation } from "react-i18next";

export const Pagination = (): JSX.Element => {
  const { t } = useTranslation("pagination");
  const [page, changePage, perPage, changePerPage, pagination] = useUnit([
    $page,
    setPage,
    $perPage,
    setPerPage,
    $pagination,
  ]);

  const handleBack = () => {
    changePage(page - 1);
  };

  const handleFront = () => {
    changePage(page + 1);
  };

  const handleLast = () => {
    changePage(pagination.pages_count);
  };

  const handleFirst = () => {
    changePage(1);
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4">
      <div className="flex md:gap-2 gap-1">
        <PaginationButton onClick={handleFirst}>
          <ChevronsLeft size={12} />
        </PaginationButton>
        <PaginationButton disabled={page === 1} onClick={handleBack}>
          <ChevronLeft size={12} />
        </PaginationButton>
        <div className="flex gap-1 px-2 md:max-w-64 max-w-48 pb-4 overflow-x-scroll">
          {pagination &&
            pagination?.pages_count > 0 &&
            Array.from({ length: pagination.pages_count }, (_, i) => i + 1).map(
              (item) => {
                return (
                  <PaginationButton
                    key={item}
                    onClick={() => changePage(item)}
                    isActive={item === page}
                  >
                    {item}
                  </PaginationButton>
                );
              }
            )}
        </div>
        <PaginationButton
          onClick={handleFront}
          disabled={pagination?.pages_count === page}
        >
          <ChevronRight size={12} />
        </PaginationButton>
        <PaginationButton onClick={handleLast}>
          <ChevronsRight size={12} />
        </PaginationButton>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-xs">{t("perPage")}</p>
        <NumberInput
          className="w-24"
          size="sm"
          hideControls
          value={perPage}
          onBlur={(e) => {
            if (e.target.value === "" || Number(e.target.value) < 0)
              changePerPage(5);
            else {
              changePerPage(Number(e.target.value));
            }
          }}
        />
      </div>
    </div>
  );
};
