'use strict';

const celcius = document.getElementById('celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
const inputs = document.querySelectorAll('.input');
const copyBtn = document.querySelectorAll('.copyText');

//Conversion Logic
inputs.forEach((input) => {
  input.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);
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

//Copy Logic
copyBtn.forEach((copy) => {
  copy.addEventListener('click', function (e) {
    const id = e.target.id;
    if (!celcius.value || !fahrenheit.value || !kelvin.value) {
      alert(`Please Enter Temperature`);
    } else {
      switch (id) {
        case 'cel':
          celcius.select();
          navigator.clipboard.writeText(`${celcius.value}°C`);
          break;
        case 'far':
          fahrenheit.select();
          navigator.clipboard.writeText(`${fahrenheit.value}°F`);
          break;
        case 'kel':
          kelvin.select();
          navigator.clipboard.writeText(`${kelvin.value} K`);
      }
    }
  });
});
