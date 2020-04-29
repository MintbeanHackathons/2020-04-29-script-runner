// This variable was going to be used to check if the script
// should run, and provide information
const info2 = {
  name: "Console Alert",
  description: "Prints an alert to the console when you are at google.ca",
  match: "https://www.google.ca",
};

(function () {
  alert("console-alert.js has run");
  console.log("console-alert.js has run");
})();
