import { Grid, Divider } from "@mui/material";
import { DetailsPagePropsTypes } from "./types";
import Header from "./Header";
import Kvp from "./Kvp";

const DetailsPage = ({
  movieDetails,
  backClickHandler,
}: DetailsPagePropsTypes) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header
            movieDetails={movieDetails}
            backClickHandler={backClickHandler}
          />
          <Divider />
          <Kvp movieDetails={movieDetails} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsPage;
