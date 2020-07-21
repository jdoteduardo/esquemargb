window.addEventListener('load', start);

var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;

var frequencyRed = null;
var frequencyGreen = null;
var frequencyBlue = null;

var divBox = null;

var r = '0';
var g = '0';
var b = '0';

function start() {
  customElements();
  sync();
}

function customElements() {
  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');

  frequencyRed = document.querySelector('#frequencyRed');
  frequencyGreen = document.querySelector('#frequencyGreen');
  frequencyBlue = document.querySelector('#frequencyBlue');

  divBox = document.querySelector('#divBox');

  rangeRed.addEventListener('change', handleRangeChange);
  rangeGreen.addEventListener('change', handleRangeChange);
  rangeBlue.addEventListener('change', handleRangeChange);
}

function handleRangeChange(event) {
  const value = event.target.value;
  const id = event.target.id;

  switch (id) {
    case 'rangeRed':
      r = value;
      break;
    case 'rangeGreen':
      g = value;
      break;
    case 'rangeBlue':
      b = value;
      break;
  }

  sync();
}

function sync() {
  divBox.style.backgroundColor = `rgb(${r},${g},${b})`;

  frequencyRed.value = r;
  frequencyGreen.value = g;
  frequencyBlue.value = b;
}
