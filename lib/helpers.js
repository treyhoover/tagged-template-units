const Qty = require('js-quantities');
const { flatten, zip } = require("./utils");

exports.convert = target => (strings, ...values) => {
  const text = flatten(zip(strings, values))
    .filter(s => s && s !== undefined && s !== null)
    .join("");

  return Qty(text).to(target).scalar;
};
