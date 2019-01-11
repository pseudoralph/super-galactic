const lifeExpectancy = require('./life-expectancy/index');

class Agifier {
  constructor(age, country = 'United States of America', sex='male') {
    this.earthAge = age;
    this.country = country;
    this.sex = sex;
  }

  passedAvg(planetAge = this.earthAge) {
    if (this.lifeRemaining(planetAge) < 0) {
      return `You've made it ${Math.abs(this.lifeRemaining(planetAge))} year${Math.abs(this.lifeRemaining(planetAge)) === 1 ? '' : 's'} past age expectancy. Tread lightly`;
    }
    return `You're still alive. Why are you wasting time calculating your age on different planets? Go out and live life!`;

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