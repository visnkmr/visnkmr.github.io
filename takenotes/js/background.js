function openPage() {
  browser.tabs.create({
    url: "index.html"
    });
}

browser.browserAction.onClicked.addListener(openPage);

