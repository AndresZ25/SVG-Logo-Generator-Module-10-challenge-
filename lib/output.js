const fs = require('fs');

const writeSVGToFile = (fileName, svgContent) => {
  fs.writeFileSync(fileName, svgContent, 'utf8');
  console.log(`Generated ${fileName}`);
};

module.exports = writeSVGToFile;