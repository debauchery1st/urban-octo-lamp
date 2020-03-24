/**
 * @module Agent
 * @param {string} named
 * @returns {Object} Object with local & shared states
 */
module.exports = function Agent(named) {
  /**
   * local state
   * @static
   */
  const localState = {};
  /**
   * access to a globally accessible state
   */
  const appState = require("./oneState");
  /**
   * start the local state
   * @static
   * @returns localSate
   */
  function localInit() {
    return localState.started
      ? localState
      : (localState.started = true) &&
          (localState.created = Date.now()) &&
          (localState.items = []) &&
          (localState.name = named);
  }
  /**
   * start the agent
   * @static
   */
  function start() {
    localInit();
    return appState.set({ started: true }, true);
  }
  function log(msg) {
    return console.log(msg);
  }
  /**
   * @returns {Object} agent status
   */
  function status() {
    return {
      name: localState.name,
      title: get("title")(),
      uptime: `app started: ${appState.uptime().uptime}s`,
      last: `last updated: ${appState.uptime().last}s`,
      items: localState.items
    };
  }
  /**
   * add or update a global
   * @param {Object} obj
   */
  function set(obj) {
    if (Object.keys(obj).filter(k => k === "title").length > 0) {
      log("use setTitle to change the app title.");
      return false;
    }
    return appState.set(obj, true);
  }
  /**
   * get the value of a global
   * @param {string} name
   */
  function get(name) {
    return appState.get(name);
  }
  /**
   * set the title of the global state
   * @param {string} newTitle
   */
  function setTitle(newTitle) {
    if (!newTitle) {
      log("requires a string");
      return false;
    }
    return appState.title(newTitle);
  }
  /**
   * receive into local state.
   * @param {Array} items
   */
  function receives(items) {
    if (!items) {
      return false;
    }
    log(`${localState.name} received ${items}`);
    localState.items = [...localState.items, ...items];
  }
  /**
   * transfer from local state to another Agent
   * @param {Object} item
   * @param {Object} receiver
   */
  function gives(item, receiver) {
    if (item === "*") {
      const given = [...localState.items];
      localState.items = [];
      log(`${localState.name} gives ${given} to ${receiver.name()}`);
      receiver.receives(given);
      return true;
    }
    const idx = localState.items.indexOf(item);
    if (idx > 0) {
      const slice1 = localState.items.slice(0, idx);
      const slice2 = localState.items.slice(idx + 1);
      localState.items = [...slice1, ...slice2];
      log(`${localState.name} gives ${item} to ${receiver.name()}`);
      receiver.receives([item]);
    }
  }
  /**
   * @returns Agent's name
   */
  function name() {
    return localState.name;
  }
  return {
    status,
    start,
    set,
    get,
    setTitle,
    receives,
    gives,
    name
  };
};
