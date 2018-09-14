module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig.map(a => a[0] + a[1]);
  let f = false;
  do {
    f = false;
    for (let p of pairs) {
      let l = str.length;
      str = str.replace(p, "");
      if (str.length !== l) f = true;
    }
  } while (f);
  return str.length === 0;
};
