import { RowType } from "../../types";

export type DetailsPagePropsTypes = {
  movieDetails: RowType | undefined;
  backClickHandler: () => void;
};

export type KvpPropsTypes = {
  movieDetails: RowType | undefined;
};
