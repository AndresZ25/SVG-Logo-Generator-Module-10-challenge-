const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Circle renders correctly', () => {
    const shape = new Circle('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle renders correctly', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />');
  });

  test('Square renders correctly', () => {
    const shape = new Square('green');
    expect(shape.render()).toEqual('<rect x="100" y="50" width="150" height="150" fill="green" />');
  });
});