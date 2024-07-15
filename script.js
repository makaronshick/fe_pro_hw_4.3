'use strict';

const CURRENT_YEAR = 2024;

const cityArr = new Map([
  ["KYIV", "Ukraine"],
  ["WASHINGTON", "USA"],
  ["LONDON", "Great Britan"],
]);

const sportArr = new Map([
  ["F1", "Sir Lewis Carl Davidson Hamilton"],
  ["JUDO", "Lukhumi Chkhvimiani"],
  ["SUMO", "Hayateumi Hidehito"],
]);

let inputYear = prompt('Enter your year of birth');
let inputCity = prompt('Enter your city of residence');
let inputSport = prompt('Enter your favorite sport');

const invalidYear =
  inputYear === null ||
  !inputYear.trim() ||
  isNaN(inputYear) ||
  parseInt(inputYear) !== +inputYear ||
  Math.abs(inputYear).toString().length !== 4 ||
  +inputYear < 1900 ||
  +inputYear > 2024;

const invalidCity = inputCity === null || !inputCity.trim() || !isNaN(inputCity);

const invalidSport = inputSport === null || !inputSport.trim() || !isNaN(inputSport);

let yearMessage = '';
let cityMessage = '';
let sportMessage = '';

if (inputYear === null) {
  yearMessage = "It's a pity that you didn't indicate your year of birth.";
}

if (inputCity === null) {
  cityMessage = "It's a pity that you didn't indicate your city of residence.";
}

if (inputSport === null) {
  sportMessage = "It's a pity that you didn't indicate your favorite sport.";
}

if (!invalidYear) {
  yearMessage = `Your age is - ${CURRENT_YEAR - inputYear}.`;
} else {
  if (inputYear !== null) {
    yearMessage = 'The year of birth must be a positive integer and consist of 4 digits (from 1900 to 2024).';
  }
}

if (!invalidCity) {
  cityMessage = 'You live in ';

  if (cityArr.has(inputCity.toUpperCase())) {
    cityMessage += `the capital of ${cityArr.get(inputCity.toUpperCase())}.`;
  } else {
    cityMessage += `${inputCity}.`;
  }
} else {
  if (inputCity !== null) {
    cityMessage = 'The city name cannot be an empty string or a number.';    
  }
}

if (!invalidSport) {
  sportMessage = "Your favorite sport is - ";

  if (sportArr.has(inputSport.toUpperCase())) {
    sportMessage = `${inputSport} - cool! Do you want to be like ${sportArr.get(inputSport.toUpperCase())}?`;
  } else {
    sportMessage += `${inputSport}.`;
  }
} else {
  if (inputSport !== null) {
    sportMessage = 'The name of the sport cannot be an empty string or a number.';    
  }
}

alert(`${yearMessage} \n${cityMessage} \n${sportMessage}`);
