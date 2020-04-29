// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "google-alert.js" file & execute it
  chrome.tabs.executeScript(tab.ib, { file: "./scripts/google-alert.js" });
  chrome.tabs.executeScript(tab.ib, { file: "./scripts/console-alert.js" });

  // This code will get a single json file and
  // const url = chrome.runtime.getURL("scripts/test.json");
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // These were attempts to list all of the scripts in the folder and run them
  // chrome.runtime.getPackageDirectoryEntry(function (dir) {
  //   console.log("DIR:", dir);
  // });

  // can't do this in a browser
  // var fs = require("fs");
  // var files = fs.readdirSync("/scripts/");
  // console.log("FILES:", files);
});
