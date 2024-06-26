try {
  chrome.runtime.onMessage.addListener((movieName, sender, sendResponse) => {
    console.log("Inside background script , movieName : ", movieName);
  });
} catch (e) {
  console.error("Error inside background script", e);
}
