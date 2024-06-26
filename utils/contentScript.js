try {
  const userSearchedValue = document.getElementsByName("q")[0].value;
  console.log(
    "Inside content script , userSearchedValue : ",
    userSearchedValue
  );
  chrome.runtime.sendMessage(userSearchedValue);
} catch (e) {
  console.error("Error inside content script", e);
}
