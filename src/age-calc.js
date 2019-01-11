const lifeExpectancy = require('life-expectancy');

class Agifier {
  constructor(age, country = 'United States of America', sex='male') {
    this.earthAge = age;
    this.country = country;
    this.sex = sex;
  }

  lifeRemaining(planetAge = this.earthAge) {
    return parseInt(this.expectancy() - planetAge);
  }

  expectancy() {
    return lifeExpectancy(this.country)[0][`${this.sex}`];
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