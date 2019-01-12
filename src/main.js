import { Agifier } from './age-calc';
import { ui_lifeExpectancy, ui_planetaryAge } from './draw-ui';
import { age as presentAge }  from './get-age';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import $ from "jquery";

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    ui_lifeExpectancy().addEventListener('click',calculateAge);
  }
});

function calculateAge() {
  let dob = document.getElementById('dob').value ? new Date(document.getElementById('dob').value) : new Date(1);
  let country = [...document.getElementById('country').options].filter(x=> x.selected===true)[0].innerText;
  let sex = document.querySelector('input[name = "sex"]:checked') ? document.querySelector('input[name = "sex"]:checked').id : 'male';

  let person = new Agifier(presentAge(dob), country, sex);

  ui_planetaryAge(person);
}
