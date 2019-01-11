import { Agifier } from './age-calc';
import { ui_lifeExpectancy } from './draw-ui';
import { age as presentAge }  from './get-age';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    ui_lifeExpectancy().addEventListener('click',init);
  }
});

function init() {
  let dob = document.getElementById('dob').value ? new Date(document.getElementById('dob').value) : new Date(1);
  let country = [...document.getElementById('country').options].filter(x=> x.selected===true)[0].innerText;
  let sex = document.querySelector('input[name = "sex"]:checked') ? document.querySelector('input[name = "sex"]:checked').id : 'male';

  let person = new Agifier(presentAge(dob), country, sex);

  console.log(`Earth age: ${person.earthAge}`);
  console.log(`Mercury age: ${person.mercuryAge()}`);
  console.log(`Venus age: ${person.venusAge()}`);
  console.log(`Mars age: ${person.marsAge()}`);
  console.log(`Jupiter age: ${person.jupiterAge()}`);
  console.log(`Age expecancy for male in ${country}: ${person.expectancy()}`);
  console.log(`Life left for ${person.earthAge}-year-old, Earth-bound ${person.sex}: ${person.lifeRemaining()} years`);
  console.log(`Life left for ${person.earthAge}-year-old, Mercury-bound ${person.sex}: ${person.lifeRemaining(person.mercuryAge())} years`);
  console.log(person.passedAvg());
}
