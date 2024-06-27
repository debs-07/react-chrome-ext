import { Grid, Typography } from "@mui/material";
import { KvpPropsTypes } from "./types";

const Kvp = ({ movieDetails }: KvpPropsTypes) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" fontWeight="bold">
          Overview:
        </Typography>
        <Typography variant="body1">{movieDetails?.overview}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" fontWeight="bold">
          Release Date:
        </Typography>
        <Typography variant="body2">{movieDetails?.releaseDate}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" fontWeight="bold">
          Rating:
        </Typography>
        <Typography variant="body2">{movieDetails?.rating}</Typography>
      </Grid>
    </>
  );
};

export default Kvp;
