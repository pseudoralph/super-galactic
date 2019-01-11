import { Agifier } from "../src/age-calc";

describe('Agifier', function() {
  let ralph= new Agifier(35)

  it(`should allow user to enter age and get confirmation of earth's age`, function() {
    expect(ralph.earthAge).toEqual(35);
  });

  it(`should return Mercurian age`, function() {
    expect(ralph.mercuryAge()).toEqual(145)
  });

  it(`should return Venetian age`, function() {
    expect(ralph.venusAge()).toEqual(56)
  });

  it(`should return Martian age`, function() {
    expect(ralph.marsAge()).toEqual(18)
  });

  it(`should return Jupiterian age`, function() {
    expect(ralph.jupiterAge()).toEqual(2)
  });

  it(`should return age expectancy for a male in the USA`, function() {
    expect(ralph.expectancy('United States of America', 'male')).toEqual(76.9)
  })

});