module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig.map(a => `${a[0]}${a[1]}`);
  let prevStr;
  do {
    prevStr = str;
    for (let pair of pairs) str = str.replace(pair, '');
  } while (prevStr.length !== str.length);
  return str.length === 0;
};
