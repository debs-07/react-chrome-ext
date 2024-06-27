import { Button, Typography } from "@mui/material";
import { DetailsPagePropsTypes, KvpPropsTypes } from "./types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({ movieDetails, backClickHandler }: DetailsPagePropsTypes) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        <Button
          size="small"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{
            textTransform: "none",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => backClickHandler()}
        >
          Back
        </Button>
        {movieDetails?.title}
      </Typography>
    </>
  );
};

export default Header;
