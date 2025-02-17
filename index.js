const getUserInput = require('./lib/input');
const writeSVGToFile = require('./lib/output');
const { Circle, Triangle, Square } = require('./lib/shapes');

const generateSVG = (text, textColor, shape) => {
  const shapeElement = shape.render();

  
  let textY;
  let textX = 200;
  if (shape instanceof Circle) {
    textY = 180; 
  } else if (shape instanceof Triangle) {
    textY = 200; 
  } else if (shape instanceof Square) {
    textY = 170; 
    textX = 175;
  }

  const fontSize = shape instanceof Square ? 40 : 80;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
  ${shapeElement}
  <text x="200" y="${textY}" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
};

const runApp = async () => {
  const { text, textColor, shape, shapeColor } = await getUserInput();

  let shapeInstance;
  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle(shapeColor);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(shapeColor);
      break;
  }

  const svgContent = generateSVG(text, textColor, shapeInstance);
  writeSVGToFile('logo.svg', svgContent);
};

runApp();