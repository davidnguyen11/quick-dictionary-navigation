import { modules } from './lib';

chrome.runtime.onInstalled.addListener(function () {
  // Make extension works on all pages
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({})],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });

  // Create right click menu
  modules.forEach((item) => {
    chrome.contextMenus.create({
      id: item.id,
      title: `Search ${item.name} for "%s"`,
      contexts: ['selection'],
    });
  });
});

modules.forEach((item) => {
  chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === item.id) {
      chrome.tabs.create({
        url: item.url(info),
      });
    }
  });
});
