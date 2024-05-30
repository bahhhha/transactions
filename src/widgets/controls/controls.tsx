import { SearchBar } from "../../entities/search-bar";
import { SortBy } from "../../entities/transactions/sort";
import { TypeFilter } from "../../entities/type-filter";

export const Controls = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col md:flex-row gap-4 items-end md:items-center">
        <SortBy />
        <SearchBar />
      </div>
      <TypeFilter />
    </div>
  );
};
