exports.zip = (...rows) => rows[0].map((_, c) => rows.map(row => row[c]));
exports.flatten = (arrays) => Array.prototype.concat.apply([], arrays);
