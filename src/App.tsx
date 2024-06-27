import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initializeDataFromChromestore } from "./store/slices/moviesSlice";
import { Box } from "@mui/material";
import ListingPage from "./ListingPage";
import DetailsPage from "./DetailsPage";
import { RowType } from "./types";

function App() {
  const dispatch = useDispatch();

  const [detailsPageConfig, setDetailsPageConfig] = useState<{
    open: boolean;
    rowDetails: RowType | undefined;
  }>({
    open: false,
    rowDetails: undefined,
  });

  useEffect(() => {
    // On initial render get data from chrome storage and put it in redux store
    updateDataIntoStore();

    // Everytime the chrome store is updated if popup is open, update redux store
    chrome.runtime.onMessage.addListener((data) => {
      if (data.message === "CHROME_STORE_UPDATED") updateDataIntoStore();
    });
  }, []);

  const updateDataIntoStore = () => {
    chrome.storage.local.get("movieHistory", (data) => {
      if (data.movieHistory)
        dispatch(initializeDataFromChromestore(data.movieHistory));
    });
  };

  const intoDetailsHandler = (rowDetails: RowType) =>
    setDetailsPageConfig({ open: true, rowDetails: rowDetails });

  const backToListingHandler = () =>
    setDetailsPageConfig({ open: false, rowDetails: undefined });

  return (
    <Box sx={{ width: "500px", height: "500px" }}>
      {detailsPageConfig.open ? (
        <DetailsPage
          movieDetails={detailsPageConfig.rowDetails}
          backClickHandler={backToListingHandler}
        />
      ) : (
        <ListingPage rowClickhandler={intoDetailsHandler} />
      )}
      ;
    </Box>
  );
}

export default App;
