const countries = require('./life-expectancy/life.json').map(x=>x.country).sort();

export function ui_lifeExpectancy() {
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

