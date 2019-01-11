import { Agifier } from "../src/age-calc";

describe('Agifier', function() {
  let ralph= new Agifier(35)

  it(`should allow user to enter age and get confirmation of earth's age`, function() {
    expect(ralph.earthAge).toEqual(35);
  });

  it(`should return Mercurian age`, function() {
    expect(ralph.mercuryAge()).toEqual(145);
  });

  it(`should return Venetian age`, function() {
    expect(ralph.venusAge()).toEqual(56);
  });

  it(`should return Martian age`, function() {
    expect(ralph.marsAge()).toEqual(18);
  });

  it(`should return Jupiterian age`, function() {
    expect(ralph.jupiterAge()).toEqual(2);
  });

  it(`should return age expectancy for a male in the USA`, function() {
    expect(ralph.expectancy()).toEqual(76.9);
  });

  it(`should return life left for individual based on planet time (default: earth)`, function() {
    expect(ralph.lifeRemaining()).toEqual(41);
  });

  it(`should return life left for invividual living on Mercury using on Eartly country-bound age expectancy`, function() {
    expect(ralph.lifeRemaining(ralph.mercuryAge())).toEqual(-68);
  });

  it(`it should tell you how much life you have left`, function() {
    expect(ralph.passedAvg()).toContain("age")
  })

});