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
        fahrenheit.value = Number(celcius.value) * 1.8 + 32;
        kelvin.value = Number(celcius.value) + 273.15;
        break;
      case 'fahrenheit':
        celcius.value = (Number(fahrenheit.value) - 32) / 1.8;
        kelvin.value = (Number(fahrenheit.value) - 32) / 18 + 273.15;
        break;
      case 'kelvin':
        celcius.value = Number(kelvin.value) - 273.15;
        fahrenheit.value = (Number(kelvin.value) - 273.15) * 1.8 + 32;
        break;
    }
  });
}
