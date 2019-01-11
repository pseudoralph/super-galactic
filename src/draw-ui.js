const countries = require('life-expectancy/life.json').map(x=>x.country).sort();

export function ui_lifeExpectancy() {
  const usaIndex = countries.indexOf('United States of America');
  
  let entry = document.getElementById('app');
  let payload = document.createElement('div');
  let rawHtml = `<h5 class="card-header">Life expectancy</h5>
  <div class="card-body">
  <div class="form-group">
  <form>
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
  <input type="radio" id="female" name="gender" class="custom-control-input">
  <label class="custom-control-label" for="female">Female</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="male" name="gender" class="custom-control-input">
  <label class="custom-control-label" for="male">Male</label>
  </div>
  </form>
  </div>
  </div>`;

  payload.setAttribute('class','card');
  payload.innerHTML=rawHtml;

  entry.appendChild(payload);

}

