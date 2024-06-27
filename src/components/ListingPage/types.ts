import { QuerySearchType, RowType } from "../../types";

export type ListingPagePropsTypes = {
  rowClickhandler: (row: RowType) => void;
  toggleExpand: () => void;
};

export type HeaderPropsTypes = {
  toggleExpand: () => void;
};

export type THeadPropsTypes = {
  toggleSearchHandler: () => void;
  searchValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TBodyTypePropsTypes = {
  rowClickhandler: (row: RowType) => void;
};

export type CellRendererPropsTypes = {
  value: string | number;
};

export type SearchButtonRendererPropsTypes = {
  toggleSearchHandler: () => void;
};

export type SearchFieldRendererPropsTypes = {
  value: string;
  searchValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SearchableTableHeaderCellPropsTypes = {
  querySearch: QuerySearchType;
  toggleSearchHandler: () => void;
  searchValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
