import { Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import { HeaderPropsTypes } from "./types";
import { clearDataFromChromeStore } from "../../store/slices/moviesSlice";
import { useDispatch } from "react-redux";

const commonBottonStyles = {
  textTransform: "none",
  backgroundColor: "black",
  color: "white",
  marginBottom: "10px",
};

const ToolbarButtons = ({ toggleExpand }: HeaderPropsTypes) => {
  const dispatch = useDispatch();

  const clearHistoryHandler = () => {
    dispatch(clearDataFromChromeStore());
    chrome.storage.local.clear();
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        sx={commonBottonStyles}
        startIcon={<DeleteOutlinedIcon />}
        onClick={() => clearHistoryHandler()}
      >
        Clear History
      </Button>
      <Button
        size="small"
        variant="contained"
        sx={{
          ...commonBottonStyles,
          marginLeft: "10px",
        }}
        onClick={() => toggleExpand()}
        startIcon={<AspectRatioOutlinedIcon />}
      >
        Expand
      </Button>
    </>
  );
};

export default ToolbarButtons;
