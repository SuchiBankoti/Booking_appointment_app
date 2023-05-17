const fs = require("fs");
const path = require("path");

const rootDir = path.dirname(require.main.filename);

const readFile = (filename) => {
  const content = fs.readFileSync(
    path.join(rootDir, "views", `${filename}`),
    "utf-8"
  );
  return content;
};
module.exports = readFile;
