import "./reset"

browser.browserAction.onClicked.addListener(tab => {
    browser.runtime.openOptionsPage()
})
