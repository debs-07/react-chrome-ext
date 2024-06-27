import { TableCell, TableHead, TableRow } from "@mui/material";
import { SearchableTableHeaderCell, HeaderCellRenderer } from "./renderers";
import { THeadPropsTypes } from "./types";
import { useSelector } from "react-redux";

const THead = ({
  toggleSearchHandler,
  searchValueHandler,
}: THeadPropsTypes) => {
  const querySearch = useSelector((state: any) => state.search.querySearch);
  return (
    <TableHead
      sx={{
        "& th": {
          color: "white",
          backgroundColor: "black",
        },
      }}
    >
      <TableRow>
        <TableCell align="center">
          <SearchableTableHeaderCell
            querySearch={querySearch}
            toggleSearchHandler={toggleSearchHandler}
            searchValueHandler={searchValueHandler}
          />
        </TableCell>
        <TableCell align="center">
          <HeaderCellRenderer value={"Title"} />
        </TableCell>
        <TableCell align="center">
          <HeaderCellRenderer value={"Release Date"} />
        </TableCell>
        <TableCell align="center">
          <HeaderCellRenderer value={"Rating"} />
        </TableCell>
        <TableCell align="center">
          <HeaderCellRenderer value={"Time"} />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default THead;
