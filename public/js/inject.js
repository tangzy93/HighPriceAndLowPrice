document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')
  // 新建script标签，设置define-postman.js
  injectScript();
})

function injectScript() {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = chrome.extension.getURL('js/define-postman.js');
  document.head.appendChild(script);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResp) {
  if (request.action === 'toggleHLInfoCard') {
    toggleHLInfoCard();
    sendResp({
      msg: 'toggleHLInfoCard'
    })
  } else {
    sendResp({
      msg: 'some actions not defined'
    })
  }
});
// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//   console.log('resceived from background.js -- onRequest', request)
//   // openModal();
//   sendResponse({
//     hi: '你好'
//   })
// })

function toggleHLInfoCard() {
  window.toggleHLInfo();
}
