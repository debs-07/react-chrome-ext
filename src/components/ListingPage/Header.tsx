import { Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch } from "react-redux";
import { clearDataFromChromeStore } from "../../store/slices/moviesSlice";

const Header = () => {
  const dispatch = useDispatch();

  const clearHistoryHandler = () => {
    dispatch(clearDataFromChromeStore());
    chrome.storage.local.clear();
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Movie Lens
      </Typography>
      <Button
        size="small"
        variant="contained"
        startIcon={<DeleteOutlinedIcon />}
        sx={{
          textTransform: "none",
          backgroundColor: "black",
          color: "white",
          marginBottom: "10px",
        }}
        onClick={() => clearHistoryHandler()}
      >
        Clear History
      </Button>
    </>
  );
};

export default Header;
