// DOM Elements
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const container = document.querySelector('.container');
const bmi = document.getElementById('bmi');
const bmiRange = document.getElementById('bmi-range');

//Calculate BMI
bmiCalc = () => {
  const BMI = (weight.value / (height.value * height.value)) * 10000;
  return BMI.toFixed(1);
};

//Range Checck
bmiRangeCheck = value => {
  if (isFinite(value)) {
    if (value < 18.5) {
      bmiRange.style.color = 'red';
      return 'Underweight';
    } else if (value >= 18.5 && value < 24.9) {
      bmiRange.style.color = 'Green';
      return 'Normal';
    } else if (value >= 24.9 && value < 29.9) {
      bmiRange.style.color = 'Orange';
      return 'Overweight';
    } else if (value > 30) {
      bmiRange.style.color = 'red';
      return 'Obese';
    }
  } else {
    bmiRange.style.color = '#000000';
    return '';
  }
};

//Update UI
updateUI = () => {
  bmiCalc();
  if (isFinite(bmiCalc())) {
    bmi.innerText = bmiCalc();
  }
  bmiRange.innerText = bmiRangeCheck(bmiCalc());
};

//Event
container.addEventListener('input', updateUI);
