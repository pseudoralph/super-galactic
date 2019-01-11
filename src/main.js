import { Agifier } from './age-calc';
import { ui_lifeExpectancy } from './draw-ui';
import 'bootstrap/dist/css/bootstrap.min.css';

let ralph = new Agifier(35,'United States of America', 'female');

console.log(ralph.earthAge);

console.log(ralph.expectancy());

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    ui_lifeExpectancy();
   
  }

});