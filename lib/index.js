const Qty = require('js-quantities');
const { flatten } = require("./utils");
const { convert } = require('./helpers');

const units = flatten(Qty.getUnits().map(u => {
  try {
    return Qty.getAliases(u);
  } catch (e) {
    return [u];
  }
}));

const unitTags = units.reduce((obj, unit) => Object.assign(obj, {
  [unit]: convert(unit),
}), {});

module.exports = Object.assign({}, unitTags, {
  ms: (...args) => convert('s')(...args) * 1000,
});
