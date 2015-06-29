exports.initRenderData = function(data, modules) {
  data = data || {};
  modules = modules || {};
  data['m'] = {};
  for (module in modules) {
    data['m'][module] = require('../render_modules/'+modules[module]);
  }
  return data;
}

exports.checkElemType = function(iterable, type) {
  /* Checks the type of each element in an iterable.

  Args:
    iterable: (list or dictionary) Iterable to test.
    type: (string) String that elements should be.

  Returns:
    (bool) True if all elements are of the specified type, else false.
  */

  for (i in iterable) {
    if (typeof iterable[i] != type) {
      return false;
    }
  }
  return true;
}
