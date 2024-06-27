import "./index.css";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Paper,
} from "@mui/material";
import { ListingPageProps, MovieType, RowType, SearchResult } from "./types";

const ListingPage = ({ rowClickhandler }: ListingPageProps) => {
  const movieHistory = useSelector((state: any) => state.movies.history);

  const processDataForListing = movieHistory?.flatMap((data: SearchResult) =>
    data?.movies?.map((movie: MovieType) => ({
      ...movie,
      query: data.query,
      searchTime: data.searchTime,
    }))
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Search Query</TableCell>
            <TableCell align="center">Search Time</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Release Date</TableCell>
            <TableCell align="center">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processDataForListing.map((row: RowType) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => rowClickhandler(row)}
            >
              <TableCell align="center">{row.query}</TableCell>
              <TableCell align="center">{row.searchTime}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.releaseDate}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingPage;
