import { Typography } from "@mui/material";
import { HeaderPropsTypes } from "./types";
import ToolbarButtons from "./ToolbarButtons";

const Header = ({ toggleExpand }: HeaderPropsTypes) => (
  <>
    <Typography variant="h4" sx={{ display: "flex", justifyContent: "center" }}>
      Movie Lens
    </Typography>
    <ToolbarButtons toggleExpand={toggleExpand} />
  </>
);

export default Header;
