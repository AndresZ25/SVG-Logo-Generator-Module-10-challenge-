const inquirer = require('inquirer');

const getUserInput = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (keyword or hex):',
    },
  ]);
};

module.exports = getUserInput;