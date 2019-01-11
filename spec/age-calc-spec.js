import { Agifier } from "../src/age-calc";

describe('Agifier', function() {
  it(`should allow user to enter age and get confirmation of earth's age`, function() {
    const ralph = new Agifier(35);

    expect(ralph.earthAge).toEqual(35);
  });

});