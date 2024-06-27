import { Button, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DetailsPageProps } from "./types";

const DetailsPage = ({ movieDetails, backClickHandler }: DetailsPageProps) => {
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => backClickHandler()}
      >
        Back
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            {movieDetails?.title}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{movieDetails?.overview}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Release Date: {movieDetails?.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Rating: {movieDetails?.rating}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsPage;
