class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

function handleFigures(figures) {
  let totalArea = 0;
  for (let i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure == true) {
      console.log(
        "Geometric figure: " +
          figures[i].toString() +
          " - area: " +
          figures[i].getArea()
      );
      totalArea += figures[i].getArea();
    }
  }
  console.log("\nTotal area: " + totalArea);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
