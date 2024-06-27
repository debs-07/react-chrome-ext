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

export type RowType = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
  query: string;
  searchTime: string;
};

export type QuerySearchType = {
  enabled: boolean;
  value: string;
};
