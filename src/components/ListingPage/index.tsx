import { Table, TableContainer, Paper } from "@mui/material";
import { ListingPagePropsTypes } from "./types";
import Header from "./Header";
import THead from "./THead";
import TBody from "./TBody";
import { useDispatch } from "react-redux";
import { updateQuery, updateToggle } from "../../store/slices/searchSlice";

const ListingPage = ({ rowClickhandler }: ListingPagePropsTypes) => {
  const dispatch = useDispatch();

  // Handler to toggle search in query column
  const toggleSearchHandler = () => dispatch(updateToggle());

  // Handler to update user inputs in search field
  const searchValueHandler = (e: { target: { value: string } }) =>
    dispatch(updateQuery(e.target.value));

  return (
    <>
      <Header />
      <TableContainer
        component={Paper}
        style={{ maxHeight: "300px", whiteSpace: "nowrap" }}
      >
        <Table stickyHeader size="small">
          <THead
            toggleSearchHandler={toggleSearchHandler}
            searchValueHandler={searchValueHandler}
          />
          <TBody rowClickhandler={rowClickhandler} />
        </Table>
      </TableContainer>
    </>
  );
};

export default ListingPage;
