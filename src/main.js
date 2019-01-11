import { Agifier } from './age-calc';
import { ui_lifeExpectancy } from './draw-ui';
import 'bootstrap/dist/css/bootstrap.min.css';

let ralph = new Agifier(35);

console.log(`Earth age: ${ralph.earthAge}`);
console.log(`Mercury age: ${ralph.mercuryAge()}`);
console.log(`Venus age: ${ralph.venusAge()}`);
console.log(`Mars age: ${ralph.marsAge()}`);
console.log(`Jupiter age: ${ralph.jupiterAge()}`);
console.log(`Age expecancy for male American: ${ralph.expectancy()}`);
console.log(`Life left for ${ralph.earthAge}-year-old, Earth-bound ${ralph.sex}: ${ralph.lifeRemaining()} years`);
console.log(`Life left for ${ralph.earthAge}-year-old, Mercury-bound ${ralph.sex}: ${ralph.lifeRemaining(ralph.mercuryAge())} years`);


document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    ui_lifeExpectancy();
   
  }

});