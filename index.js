"use strict";

const selianize = require("selianize").default;
const fs = require("fs");

const args = process.argv.slice(2);
if (!args || args.length !== 1) {
  console.log("Please set side filename in the first argument.");
  return;
}
(async () => {
  //.sideの読み込み & JSONをパース
  const project = JSON.parse(fs.readFileSync(args[0] + ".side"));
  const selianized = await selianize(project);
  //変換後のプロジェクトを表示
  for (let i = 0; i < selianized.tests.length; i++) {
    console.log("------------------------------------");
    console.log(selianized.tests[i].name + "[" + selianized.tests[i].id + "]");
    console.log("------------------------------------");
    console.log(selianized.tests[i].code);
  }
})();
