class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="200" cy="150" r="120" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="200,50 350,250 50,250" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };