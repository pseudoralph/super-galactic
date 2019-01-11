const lifeExpectancy = require('life-expectancy');
const rawData = require('life-expectancy/life.json')

class Agifier {
  constructor(age) {
    this.earthAge = age;
  }

  countries() {
    return rawData;
  }

  expectancyFactor(country, sex) {
    return lifeExpectancy(country)[0][`${sex}`]
  }

  mercuryAge() {
    const planetaryOffest = .24;
    return parseInt(this.earthAge/planetaryOffest);
  }

  venusAge() {
    const planetaryOffest = .62;
    return parseInt(this.earthAge/planetaryOffest);
  }

  marsAge() {
    const planetaryOffest = 1.88;
    return parseInt(this.earthAge/planetaryOffest);
  }

  jupiterAge() {
    const planetaryOffest = 11.86;
    return parseInt(this.earthAge/planetaryOffest);
  }



}


export { Agifier };