import { Agifier } from "../src/age-calc";

describe('Agifier', function() {
  let ralph= new Agifier(35)

  it(`should allow user to enter age and get confirmation of earth's age`, function() {
    expect(ralph.earthAge).toEqual(35);
  });

  it(`should return Mercurian age`, function() {
    expect(ralph.mercuryAge().toEqual(145))
  })

});