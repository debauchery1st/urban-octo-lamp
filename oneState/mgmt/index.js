/**
 * @param none
 * has only one instance
 * @returns {object} a global point of access to it
 */
module.exports = (function() {
  let instance;
  /**
   * @param none
   * timestamp the instance
   * @returns true
   */
  function ts() {
    if (!instance) {
      return true;
    }
    instance.accessed += 1;
    instance.data = { ...instance.data, last: Date.now() };
    return true;
  }
  /**
   * @param none
   * timedelta
   * @returns {object} time passed in seconds
   */
  function timedelta() {
    return {
      uptime: ((Date.now() - instance.data.created) * 10 ** -3).toFixed(2),
      last: ((Date.now() - instance.data.last) * 10 ** -3).toFixed(2)
    };
  }
  /**
   * @param none
   * create instance
   * @returns {object} new mgmt.instance
   */
  function addKeyValuePair(obj, stamp = false) {
    const clone = { ...instance.data };
    if (!Object.keys(obj).length > 0) {
      console.log("only {key: value} pairs");
      return false;
    }
    instance.data = { ...clone, ...obj };
    if (stamp) ts();
    return true;
  }
  /**
   * @param none
   * create instance
   * @returns {object} new mgmt.instance
   */
  function createInstance() {
    return new Object({
      accessed: 0,
      text: "it's not magic",
      data: {
        created: Date.now()
      },
      uptime: timedelta,
      insert: addKeyValuePair
    });
  }
  return {
    getInstance: function() {
      if (!instance) instance = createInstance();
      ts(); // timestamp
      return instance;
    }
  };
})();
