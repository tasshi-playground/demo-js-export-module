const { Hoge } = require("./module");
try {
  const hoge = new Hoge();
  hoge.fuga();
} catch (e) {
  console.log(e);
}
