class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }
  
  class AreaCalculator {
    static calculate(shape) {
      switch (true) {
        case shape instanceof Square: return shape.side ** 2;
          break;
        case shape instanceof Rectangle: return shape.width * shape.height;
          break;
        case shape instanceof Circle: return (shape.radius ** 2) * Math.PI;
          break;
  
        default: return "sorry, can't calculate this area"
          break;
      }
    }
  }
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));