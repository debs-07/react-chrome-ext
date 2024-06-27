import { Box, IconButton, TextField, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
  CellRendererPropsTypes,
  SearchButtonRendererPropsTypes,
  SearchFieldRendererPropsTypes,
  SearchableTableHeaderCellPropsTypes,
} from "./types";

export const HeaderCellRenderer = ({ value }: CellRendererPropsTypes) => (
  <Typography variant="subtitle2" fontWeight="bold">
    {value}
  </Typography>
);

const SearchButtonRenderer = ({
  toggleSearchHandler,
}: SearchButtonRendererPropsTypes) => (
  <FilterAltOutlinedIcon
    sx={{ backgroundColor: "none" }}
    onClick={() => toggleSearchHandler()}
  />
);

const SearchFieldRenderer = ({
  value,
  searchValueHandler,
}: SearchFieldRendererPropsTypes) => (
  <TextField
    size="small"
    variant="outlined"
    placeholder="Type here"
    value={value}
    inputProps={{
      style: {
        padding: `0 5px`,
      },
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
      },
    }}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchValueHandler(e)}
  />
);

export const SearchableTableHeaderCell = ({
  querySearch,
  toggleSearchHandler,
  searchValueHandler,
}: SearchableTableHeaderCellPropsTypes) => {
  const { enabled, value } = querySearch;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
      }}
    >
      {enabled ? (
        <SearchFieldRenderer
          value={value}
          searchValueHandler={searchValueHandler}
        />
      ) : (
        <HeaderCellRenderer value={"Query"} />
      )}
      <SearchButtonRenderer toggleSearchHandler={toggleSearchHandler} />
    </Box>
  );
};

export const CellRenderer = ({ value }: CellRendererPropsTypes) => (
  <Typography
    variant="subtitle2"
    sx={{
      maxWidth: 200,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {value}
  </Typography>
);
