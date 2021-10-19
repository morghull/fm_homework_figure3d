'use strict';

const figures = [
  new Sphere(10),
  new Cylinder(10, 10),
  new Cuboid(10, 20, 30),
  new Cube(10),
];

const getReport = (figure) => {
  console.log(
    figure,
    `${figure.name} has volume: ${figure.getVolume()}`
  );
};

figures.forEach((figure) => {
  getReport(figure);
});
