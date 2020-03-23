function ExampleApp() {
  const appState = require("./oneState");
  function start() {
    return appState.set({ started: "ok" });
  }
  function status() {
    return {
      title: get("title")(),
      uptime: `app started: ${appState.uptime().uptime}s`,
      last: `last updated: ${appState.uptime().last}s`
    };
  }
  function set(obj) {
    if (Object.keys(obj).filter(k => k === "title").length > 0) {
      console.log("use setTitle to change the app title.");
      return false;
    }
    return appState.set(obj, true);
  }
  function get(name) {
    return appState.get(name);
  }
  function setTitle(newTitle) {
    if (!newTitle) {
      console.log("requires a string");
      return false;
    }
    return appState.title(newTitle);
  }
  return {
    status,
    start,
    set,
    get,
    setTitle
  };
}

let app = ExampleApp();
// console.log(app.status());
app.setTitle("Example");
console.log(app.status());
