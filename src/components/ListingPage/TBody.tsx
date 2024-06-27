import { TableBody, TableRow, TableCell } from "@mui/material";
import { MovieType, RowType, SearchResult } from "../../types";
import { useSelector } from "react-redux";
import moment from "moment";
import { useMemo } from "react";
import { TBodyTypePropsTypes } from "./types";
import { CellRenderer } from "./renderers";

const TBody = ({ rowClickhandler }: TBodyTypePropsTypes) => {
  const movieHistory = useSelector((state: any) => state.movies.history);
  const querySearch = useSelector((state: any) => state.search.querySearch);

  // Processing data to list format
  const processDataForListing: RowType[] = useMemo(() => {
    return movieHistory?.flatMap((data: SearchResult) => {
      const shouldInclude =
        !querySearch.value ||
        data.query
          .toLocaleLowerCase()
          .includes(querySearch.value.toLocaleLowerCase());

      if (shouldInclude) {
        return data.movies.map((movie: MovieType) => ({
          ...movie,
          query: data.query,
          searchTime: moment(data.searchTime).format("MM/DD/YYYY HH:mm"),
        }));
      } else {
        return [];
      }
    });
  }, [movieHistory, querySearch.value]);

  return (
    <>
      {processDataForListing.length === 0 ? (
        <TableRow>
          <TableCell colSpan={5} align="center">
            No Data Found
          </TableCell>
        </TableRow>
      ) : (
        <TableBody>
          {processDataForListing.map((row: RowType) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => rowClickhandler(row)}
            >
              <TableCell align="center">
                <CellRenderer value={row.query} />{" "}
              </TableCell>
              <TableCell align="center">
                <CellRenderer value={row.title} />
              </TableCell>
              <TableCell align="center">
                <CellRenderer value={row.releaseDate} />
              </TableCell>
              <TableCell align="center">
                <CellRenderer value={row.rating} />
              </TableCell>
              <TableCell align="center">
                <CellRenderer value={row.searchTime} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </>
  );
};

export default TBody;
