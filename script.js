'use strict';

const celcius = document.querySelector('#celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case 'celcius':
        fahrenheit.value = +celcius.value * 1.8 + 32;
        kelvin.value = +celcius.value + 273.15;
        if (celcius.value === '') {
          fahrenheit.value = '';
          kelvin.value = '';
        }
        break;
      case 'fahrenheit':
        celcius.value = (+fahrenheit.value - 32) / 1.8;
        kelvin.value = (+fahrenheit.value - 32) / 18 + 273.15;
        if (fahrenheit.value === '') {
          celcius.value = '';
          kelvin.value = '';
        }
        break;
      case 'kelvin':
        celcius.value = +kelvin.value - 273.15;
        fahrenheit.value = (+kelvin.value - 273.15) * 1.8 + 32;
        if (kelvin.value === '') {
          fahrenheit.value = '';
          celcius.value = '';
        }
        break;
    }
  });
}
