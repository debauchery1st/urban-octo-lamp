/**
 * @module oneState
 */
const mgmt = require("./mgmt").getInstance();
/**
 * get
 * @param {string} key *optional
 * @returns {*} state or *state.key value
 * @static
 */
const get = key => {
  return key ? mgmt.data[key] : mgmt.data;
};
/**
 * set
 * @param {Object} obj *required
 * @param {boolean} stamp timestamp this call?
 * @static
 * @returns {boolean}
 */
const set = (obj, stamp = false) => {
  const firstKey = Object.keys(obj)[0];
  if (firstKey === "0") return false;
  return mgmt.insert(obj, stamp);
};
/**
 * uptime
 * @static
 * @returns time delta measured in seconds
 */
const uptime = () => {
  return mgmt.uptime();
};
/**
 * get or set Title
 * @param {string} newTitle
 * @static
 * @returns {string} current title
 */
const title = newTitle => {
  return mgmt.data.title(newTitle);
};
module.exports = {
  uptime,
  get,
  set,
  title
};
