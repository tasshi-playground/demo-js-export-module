import { Hoge }from"./module.js";
try {
    const hoge = new Hoge();
    hoge.fuga();
} catch (e) {
    console.log(e);
}
