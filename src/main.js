import { Agifier } from './age-calc';
import { ui_lifeExpectancy } from './draw-ui';
import 'bootstrap/dist/css/bootstrap.min.css';

let ralph = new Agifier(35);

console.log(ralph.earthAge);

console.log(ralph.expectancy('United States of America', 'male'));

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    ui_lifeExpectancy();
   
  }

});