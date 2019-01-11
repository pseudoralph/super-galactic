const countries = require('life-expectancy/life.json').map(x=>x.country).sort();


export function ui() {

  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {


     

      console.log(countries);


    }

  });



}