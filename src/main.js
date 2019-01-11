import { Agifier } from './age-calc';
import { ui } from './draw-ui';
import 'bootstrap/dist/css/bootstrap.min.css';

let ralph = new Agifier(35);

console.log(ralph.earthAge);

console.log(ralph.expectancyFactor('United States of America', 'female'));

ui();

