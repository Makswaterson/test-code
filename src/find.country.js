'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];
const inputRef = document.querySelector('.search-input');
const outputErroRef = document.querySelector('.output-error');
const listRef = document.querySelector('.country-card');

const onHandleInput = evt => {
  const { value } = evt.target;
  const normalizeValue = value.trim().toLowerCase();
  if (normalizeValue === '') {
    outputErroRef.textContent = '';
    listRef.innerHTML = '';
    return;
  }

  const findCountry = countries.filter(({ name }) => {
    return name.toLowerCase().includes(normalizeValue);
  });
  outputErroRef.textContent = '';
  if (findCountry.length > 1) {
    const countryListMarkup = createCountryListMarkup(findCountry);
    listRef.innerHTML = countryListMarkup;
    return;
  }
  if (findCountry.length === 1) {
    const countryListMarkup = createCountryInfo(findCountry[0]);
    // listRef.innerHTML = countryListMarkup.join('');
    return;
  }
  if (findCountry.length === 0) {
    outputErroRef.textContent = `Country ${normalizeValue} not found!`;
    listRef.innerHTML = '';
  }
};

function createCountryListMarkup(countries) {
  return countries.map(
    ({ name, capital }) =>
      `<li>
  <h5> Country name: ${name}</h5>
  <p>Country capital: ${capital}</p>
  </li>`
  );
}

function createCountryInfo({ name, capital, population, area }) {
  return `<li>
  <h3> Country name: ${name}</h3>
  <p>Country capital: ${capital}</p>
  <p>population: ${population}</p>
  <p>area: ${area}</p>
  </li>`;
}

const trottledInput = _.throttle(onHandleInput, 300);
inputRef.addEventListener('input', trottledInput);
