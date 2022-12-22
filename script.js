'use strict';

const celcius = document.getElementById('celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
const inputs = document.querySelectorAll('.input');

const copyBtn1 = document.querySelector('.copyText1');
const copyBtn2 = document.querySelector('.copyText2');
const copyBtn3 = document.querySelector('.copyText3');

inputs.forEach((input) => {
  input.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);
    const copyBtn = document.querySelectorAll('.copyBtn');

    switch (e.target.name) {
      case 'celcius':
        fahrenheit.value = value * 1.8 + 32;
        kelvin.value = value + 273.15;
        if (value === '') {
          fahrenheit.value = '';
          kelvin.value = '';
        }

        break;

      case 'fahrenheit':
        celcius.value = (value - 32) / 1.8;
        kelvin.value = (value - 32) / 18 + 273.15;
        if (value === '') {
          celcius.value = '';
          kelvin.value = '';
        }
        break;

      case 'kelvin':
        celcius.value = value - 273.15;
        fahrenheit.value = (value - 273.15) * 1.8 + 32;
        if (value === '') {
          fahrenheit.value = '';
          celcius.value = '';
        }
        break;
    }
  });
});
copyBtn1.onclick = () => {
  celcius.select();
  navigator.clipboard.writeText(celcius.value);
};

copyBtn2.onclick = () => {
  fahrenheit.select();
  navigator.clipboard.writeText(fahrenheit.value);
};

copyBtn3.onclick = () => {
  kelvin.select();
  navigator.clipboard.writeText(kelvin.value);
};
