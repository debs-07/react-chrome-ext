try {
  const userSearchedValue = document.getElementsByName("q")[0].value;

  // Sending message to backgroundScript
  chrome.runtime.sendMessage({
    message: "USER_SEARCHED",
    searchValue: userSearchedValue,
  });
} catch (e) {
  console.error("Error inside content script", e);
}
