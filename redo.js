function perform1() {
  let datadaily = {
    timewk: 34,
    period1: 'Last week - 36hr',
    timepl: 23,
    period2: 'Last week - 20hr',
    timest: 36,
    period3: 'Last week - 40hr',
    timeex: 16,
    period4: 'Last week - 23hr',
    timesal: 12,
    period5: 'Last week - 05hr',
    timesc: 13,
    period6: 'Last week - 05hr'
  };

  // Save current data to localStorage
  localStorage.setItem('currentData', JSON.stringify(datadaily));

  // Update DOM
  updateDOM(datadaily);
}

function perform2() {
  let datadaily = {
    timewk: 96,
    period1: 'Last week - 86hr',
    timepl: 75,
    period2: 'Last week - 78hr',
    timest: 80,
    period3: 'Last week - 40hr',
    timeex: 90,
    period4: 'Last week - 63hr',
    timesal: 92,
    period5: 'Last week - 105hr',
    timesc: 13,
    period6: 'Last week - 09hr'
  };

  localStorage.setItem('currentData', JSON.stringify(datadaily));

  updateDOM(datadaily);
}

function perform3() {
  let datadaily = {
    timewk: 196,
    period1: 'Last week - 186hr',
    timepl: 175,
    period2: 'Last week - 178hr',
    timest: 180,
    period3: 'Last week - 140hr',
    timeex: 190,
    period4: 'Last week - 163hr',
    timesal: 192,
    period5: 'Last week - 105hr',
    timesc: 56,
    period6: 'Last week - 09hr'
  };

  localStorage.setItem('currentData', JSON.stringify(datadaily));

  updateDOM(datadaily);
}

// Helper function to update the DOM from data object
function updateDOM(datadaily) {
  document.querySelector('.js-txt1').innerHTML = datadaily.timewk;
  document.querySelector('.js-txt2').innerHTML = datadaily.period1;
  document.querySelector('.js-txt3').innerHTML = datadaily.timepl;
  document.querySelector('.js-txt4').innerHTML = datadaily.period2;
  document.querySelector('.js-txt5').innerHTML = datadaily.timest;
  document.querySelector('.js-txt6').innerHTML = datadaily.period3;
  document.querySelector('.js-txt7').innerHTML = datadaily.timeex;
  document.querySelector('.js-txt8').innerHTML = datadaily.period4;
  document.querySelector('.js-txt9').innerHTML = datadaily.timesal;
  document.querySelector('.js-txt10').innerHTML = datadaily.period5;
  document.querySelector('.js-txt11').innerHTML = datadaily.timesc;
  document.querySelector('.js-txt12').innerHTML = datadaily.period6;
}

// On page load, load the saved data from localStorage if it exists
window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('currentData');
  if (savedData) {
    updateDOM(JSON.parse(savedData));
  }
});
