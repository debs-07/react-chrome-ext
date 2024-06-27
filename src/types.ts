export type MovieType = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
};

export type SearchResult = {
  movies: MovieType[];
  query: string;
  searchTime: string;
};

export type SearchResultListType = {
  history: SearchResult[];
};

export type ListingPageProps = {
  rowClickhandler: (row: RowType) => void;
};

export type RowType = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
  query: string;
  searchTime: string;
};

export type DetailsPageProps = {
  movieDetails: RowType | undefined;
  backClickHandler: () => void;
};
