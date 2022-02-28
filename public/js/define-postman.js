function postToContentScript(action, payload) {
  window.postMessage({
    action,
    payload
  }, '*')
}
