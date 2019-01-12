import { earth, jupiter, mars, mercury, venus } from './planet-images';
import { imgTagify } from './img-tag-maker';

const countries = require('./life-expectancy/life.json').map(x=>x.country).sort();

function ui_lifeExpectancy() {
  const usaIndex = countries.indexOf('United States of America');
  
  let entry = document.getElementById('app');
  let payload = document.createElement('div');
  let rawHtml = `<h5 class="card-header">Super Galactic Age Calculator</h5>
  <div class="card-body">
  <div class="form-group">
  <form>
  <label>Enter birthdate:</label>
  <input type="date" name="bday"  class="form-control" id="dob" ><br>
  <label for="country">Country:</label>
  <select class="form-control" id="country">`;
      
  for (let c = 0; c<countries.length; c++) {
    if (c === usaIndex) {
      rawHtml+=`<option id="${c}" selected="selected">${countries[c]}</option>`;
    } else {rawHtml+=`<option id="${c}">${countries[c]}</option>`; }
  }

  rawHtml+=`</select>
  </div>
  <div class="form-group">
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="female" name="sex" class="custom-control-input">
  <label class="custom-control-label" for="female">Female</label>
  </div>
  <div class="form-group custom-control custom-radio custom-control-inline">
  <input type="radio" id="male" name="sex" class="custom-control-input">
  <label class="custom-control-label" for="male">Male</label>
  </div>
  </div>
  <button class="btn btn-primary" id="calculate-age">Calculate</button>
  </form>
  </div>`;

  payload.setAttribute('class','card');
  payload.innerHTML=rawHtml;

  entry.appendChild(payload);

  return (document.getElementById('calculate-age'));
}

function ui_planetaryAge(person) {  
  let entry = document.getElementById('output');
  let planets = [
    {
      name: 'Mercury',
      nameified: 'Mercurian',
      image: imgTagify(mercury),
      planetAgeGetter: person.mercuryAge(),
      planetExpectancy: person.passedAvg(person.mercuryAge())
    },{
      name: 'Venus',
      nameified: 'Venusian',
      image: imgTagify(venus),
      planetAgeGetter: person.venusAge(),
      planetExpectancy: person.passedAvg(person.venusAge())
    },{
      name: 'Mars',
      nameified: 'Martian',
      image: imgTagify(mars),
      planetAgeGetter: person.marsAge(),
      planetExpectancy: person.passedAvg(person.marsAge())
    },{
      name: 'Jupiter',
      nameified: 'Juptiterian',
      image: imgTagify(jupiter),
      planetAgeGetter: person.jupiterAge(),
      planetExpectancy: person.passedAvg(person.jupiterAge())
    }];

  let rawHtml = `<div id="accordion">
  <div class="card">
  <div class="card-header" id="heading0">
  <h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
  <span id="earth-img"></span>Earth
  </button>
  </h5>
  </div>
  <div id="collapse0" class="collapse show" aria-labelledby="heading0" data-parent="#accordion">
  <div class="card-body">
  <p>Earth age: <code>${person.earthAge}</code></p>
  <p>Age expecancy for a <code>${person.sex}</code> living in the <code>${person.country}</code>: <code>${person.expectancy()}</code> years</p>
  </div>
  </div>
  </div>`;

  for (let i = 0; i <planets.length; i++) {
    rawHtml += `<div class="card">
    <div class="card-header" id="heading${i+1}">
    <h5 class="mb-0">
    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i+1}" aria-expanded="false" aria-controls="collapse${i+1}">
    <span id="${planets[i].name.toLowerCase()}-img"></span>${planets[i].name}
    </button>
    </h5>
    </div>
    <div id="collapse${i+1}" class="collapse" aria-labelledby="heading${i+1}" data-parent="#accordion">
    <div class="card-body">
    <p>${planets[i].nameified} age: <code>${planets[i].planetAgeGetter}</code></p>
    <p>Age expecancy for a <code>${person.sex}</code> living in the <code>${person.country}</code>: <code>${person.expectancy()}</code></p>
    <p>${planets[i].planetExpectancy}</p>
    </div>
    </div>
    </div>`;
  }
  entry.innerHTML = rawHtml;

  document.getElementById('earth-img').appendChild(imgTagify(earth));

  for (let i=0; i < planets.length; i++) {
    document.getElementById(`${planets[i].name.toLowerCase()}-img`).appendChild(planets[i].image);
  }

}

export { ui_lifeExpectancy, ui_planetaryAge };