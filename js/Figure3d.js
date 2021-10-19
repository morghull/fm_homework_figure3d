'use strict';

class Figure3d {
  constructor(name) {
    this.name = name;
  }
  getVolume() {}
}

class Sphere extends Figure3d {
  constructor(radius) {
    super('Sphere');
    this.radius = radius;
  }
  getVolume() {
    const volume =
      (4 / 3) * Math.PI * this.radius * this.radius * this.radius;
    return volume;
  }
}
class Cylinder extends Figure3d {
  constructor(radius, height) {
    super('Cylinder');
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    const volume = Math.PI * this.radius * this.radius * this.height;
    return volume;
  }
}
class Cuboid extends Figure3d {
  constructor(length, width, height) {
    super('Cuboid');
    this.length = length;
    this.width = width;
    this.height = height;
  }
  getVolume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }
}
class Cube extends Cuboid {
  constructor(edge) {
    super(edge, edge, edge);
    this.name = 'Cube';
  }
}
