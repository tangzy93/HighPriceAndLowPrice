chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {
    action: 'toggleHLInfoCard',
    payload: tab
  }, function(response) {
    console.log(response)
  });
  // chrome.tabs.sendRequest(tab.id, {
  //   action: 'open-modal',
  //   payload: tab
  // }, function(response) {
  //   console.log('------ background sendRequest response ------');
  //   console.log(response);
  //   console.log('------ background sendRequest response ------')
  // });
});
