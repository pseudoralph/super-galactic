import { Agifier } from './age-calc';

let ralph = new Agifier(35);

console.log(ralph.earthAge);

console.log(ralph.expectancyFactor('United States of America', 'female'));

console.log(ralph.countries())