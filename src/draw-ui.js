const countries = require('life-expectancy/life.json').map(x=>x.country).sort();


export function ui() {

  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      let entry = document.getElementById('app');
      let payload = document.createElement('div');
      payload.setAttribute('class','card');

      let rawHtml = `
  <h5 class="card-header">Life expectancy</h5>
    <div class="card-body">
      <div class="form-group">
        <label for="country">Country:</label>
        <select class="form-control" id="country">`;
      
      for (let c = 0; c<countries.length; c++) {
        rawHtml+=`
          <option>${countries[c]}</option>`; 
      }

      rawHtml+=`
        </select>
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
      </div>
    </div>`;

      payload.innerHTML=rawHtml;
      entry.appendChild(payload);
    }

  });
}

