import { Button, Input } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { $search } from "../model";
import { setSearch } from "../model";
import { useUnit } from "effector-react";
import { Search } from "lucide-react";
import { triggerSearch } from "../../../features/get-transactions/model";
export const SearchBar = (): JSX.Element => {
  const { t } = useTranslation("controls");
  const [search, changeSearch, startSearch] = useUnit([
    $search,
    setSearch,
    triggerSearch,
  ]);

  const handleSearch = () => {
    startSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startSearch();
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <Input
        onKeyDown={handleKeyDown}
        onBlur={handleSearch}
        value={search}
        onChange={(e) => changeSearch(e.target.value)}
        className="w-64"
        placeholder={t("search")}
      />
      <Button
        onClick={handleSearch}
        className="p-2 border border-gray-300 shadow-sm hover:bg-gray-100 duration-150 bg-white"
      >
        <Search className="w-4 h-4 text-gray-500" />
      </Button>
    </div>
  );
};
