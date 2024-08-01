const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");

const {
  baseUri,
  description,
  namePrefix,
  network,
} = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);
var sorted = data.sort(function(a, b) {return a.edition - b.edition});

data.forEach((item) => {
 

  item.image = `${baseUri}/${item.edition}.png`;
  
  fs.writeFileSync(
    `${basePath}/build/json/${item.edition}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(sorted, null, 2)
);

 console.log(`corrected item order`);
 console.log(`Updated baseUri for images to ===> ${baseUri}`);