class Agifier {
  constructor(age) {
    this.earthAge = age;

    this.lifeExpectFactor = 1;
  }

  mercuryAge() {
    const offset = .24;

    return parseInt(this.earthAge/offset);

  }

  venusAge() {

  }

  marsAge() {

  }

  jupiterAge() {

  }



}


export { Agifier }